const mysql = require('mysql2/promise');
let inquirer = require("inquirer")

let connection


initialize()
main();


async function initialize() {
  connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'employeeupdate_db', })

}


async function main() {
  // get the client
  // create the connection
  const responseObject = await inquirer.prompt([{
    type: 'list',
    name: 'menu',
    message: "What would you like to do ",
    choices: [
      'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role ', 'exit'
    ]

  }])

  console.log(responseObject)
  if (responseObject.menu === "view all departments") {
    viewAllDepartments()

  } else if (responseObject.menu === "view all roles") {
    viewAllRoles()

  } else if (responseObject.menu === "view all employees") {
    viewAllEmployees()

  }
  else if (responseObject.menu === "add a department") {
    addADepartment()

  }
  else if (responseObject.menu === "add a role") {
    addARole()

  }
  else if (responseObject.menu === "add an employee") {
    addAEmployee()

  }
  else if (responseObject.menu === "update an employee role ") {
    updateAEmployee()

  }
  else {
    process.exit()
  }





}



async function viewAllDepartments() {
  const [rows] = await connection.execute(`SELECT * FROM department;`)
  console.log("department")
  console.table(rows)
  main()
}
async function viewAllRoles() {
  const [rows] = await connection.execute(`SELECT * FROM role;`)

  console.table(rows)
  main()
}
async function viewAllEmployees() {
  // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
  const [rows] = await connection.execute(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name, role.salary, concat(newemp.first_name, " " ,newemp.last_name) as manangername FROM employee left join role on employee.role_id =role.id left join department on role.department_id = department.id left join employee as newemp on newemp.id = employee.manager_id;`)

  console.table(rows)

  main()
}
async function addADepartment() {
  const [rows] = await connection.execute(`SELECT * FROM department;`)
  // WHEN I choose to add a department
  // THEN I am prompted to enter the name of the department and that department is added to the database
  let newDepartment = await inquirer.prompt([
    
    {

      type: 'input',
      name: 'name',
      message: " name of the department  ?"
    },
   

  ])
  await connection.query(` insert into department set ?`, [newDepartment])

  main()
}
async function addARole() {
  const [rows] = await connection.execute(`SELECT * FROM role;`)
  // WHEN I choose to add a role
  // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
  let newRole = await inquirer.prompt([
    
    {

      type: 'input',
      name: 'title',
      message: " name of the role  ?",
    },
    {

      type: 'input',
      name: 'salary',
      message: " salary?",
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'department id ? '
      
      
      

    }

  ])
  console.log(newRole)
  console.table(rows)
  await connection.query(` insert into role set ?`, [newRole])
  
  main()
}

async function addAEmployee() {
  const [rows] = await connection.execute(`SELECT * From employee`)
  console.table(rows)
  const [roles] = await connection.execute(`SELECT * From role`)
  console.log(roles)
  let newEmployee = await inquirer.prompt([
    {
      type: 'list',
      name: 'role_id',
      message: 'what role will the employee have? ',
      choices: roles.map(role => ({ value: role.id, name: role.title }))


    },
    {

      type: 'input',
      name: 'first_name',
      message: " employee first name ?",
    },
    {

      type: 'input',
      name: 'last_name',
      message: " employee last name ?",
    },
    {
      type: 'list',
      name: 'manager_id',
      message: 'who is the manger? ',
      choices: rows.map(emp => ({ value: emp.id, name: `${emp.first_name} ${emp.last_name}` }))

    }

  ])
  console.log(newEmployee)
  //  ` insert into employee set ?`
  await connection.query(` insert into employee set ?`, newEmployee)
  main()
}
async function updateAEmployee() {
  const [rows] = await connection.execute(`SELECT * FROM employee;`)
  // WHEN I choose to update an employee role
  // THEN I am prompted to select an employee to update and their new role and this information is updated in the database
  viewAllEmployees() 

  main()
}






















//   GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 