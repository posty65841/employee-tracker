-- drop database 
DROP DATABASE IF EXISTS employeeupdate_db;
CREATE DATABASE employeeupdate_db;

USE employeeupdate_db;

CREATE TABLE department (
  
  id INT NOT NULL auto_increment primary key ,
  
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  
  id INT NOT NULL auto_increment primary key ,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
   FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
  
);
  
 
CREATE TABLE employee (
  id INT NOT NULL auto_increment primary key ,
  first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT , 
manager_id INT,
   FOREIGN KEY (role_id)
  REFERENCES role(id)
  ON DELETE CASCADE,
   FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE set null
  
);
-- need to make role_id a foreign key  in order to do bonus 