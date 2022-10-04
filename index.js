const mysql = require('mysql2/promise');
let inquirer = require("inquirer")

let connection


initialize()
main();


async function initialize(){
    connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'employeeupdate_db',})

}


async function main() {
    // get the client
    // create the connection
    const responseObject = await inquirer.prompt([ {
        type: 'list',
        name: 'menue',
        message: "What would you like to do ",
        choices:[
          'view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role'
        ]
        
          
           
      
       
      }])

      console.log(responseObject)
      if (responseObject.menu === "view all departments"){
        viewAllDepartments()
       
    } if (responseObject.menu === "view all roles"){
      viewAllRoles()
     
    } if (responseObject.menu === "view all employees"){
    viewAllEmployees()
    
    }
    if (responseObject.menu === "add a department"){
      addADepartment()
      
    }
    if (responseObject.menu === "add a role"){
      addARole()
     
    }
    if (responseObject.menu === "add an employee"){
      addAEmployee()
      
    }
    if (responseObject.menu === "update an employee role "){
      updateAEmployee()
      
    }




    async function viewAllDepartments(){
      const [rows] = await connection.execute(`SELECT * FROM department;`)
      console.log("department")
      console.table(rows)
  }
    async function viewAllRoles(){
    const [rows] = await connection.execute(`SELECT * FROM role;`)
    
    console.table(rows)
  }
  async function viewAllEmployees(){
    const [rows] = await connection.execute(`SELECT * FROM employee;`)
    
    console.table(rows)
  }
  async function addADepartment(){
    const [rows] = await connection.execute(`SELECT * FROM department;`)
    
    console.table(rows)
  }
  async function addARole(){
    const [rows] = await connection.execute(`SELECT * FROM role;`)
   
    console.table(rows)
  }
  async function addAEmployee(){
    const [rows] = await connection.execute(`SELECT * FROM employee;`)
    
    console.table(rows)
  }
  async function updateAEmployee(){
    const [rows] = await connection.execute(`SELECT * FROM employee;`)
  
    console.table(rows)
}


    // query database
    

      // UPDATE
      // UPDATE employeeupdate_db.employee SET first_name = 'New First Name', last_name = 'New Last Name' WHERE id = 9000;
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