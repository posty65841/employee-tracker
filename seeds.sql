-- department
INSERT INTO employeeupdate_db.department (name)
VALUES ('CEO');
INSERT INTO employeeupdate_db.department (name)
VALUES ('VenueManager');
INSERT INTO employeeupdate_db.department (name)
VALUES ('Director');
INSERT INTO employeeupdate_db.department (name)
VALUES ('Capture');
INSERT INTO employeeupdate_db.department (name)
VALUES ('Camera');
INSERT INTO employeeupdate_db.department (name)
VALUES ('Cloud');

-- employee
INSERT INTO employeeupdate_db.employee (first_name, last_name, role_id, manager_id)
VALUES 
('Thomas', 'post', '1',  "1" ),
('Jackson', 'Wallis', '2', '1'),
('Derik', 'Olssin', '6', '1' ),
('Austin', 'Post', '4', '2' ),
('Tommy', 'Blankenship', '5', '2' ),
('Julius', 'Lee', '3', '2'),
('Shea', 'Smith', '2', '1'),
('Brian', 'Hamfelt', '3', '2'),
('Jack', 'slater', '5', '2'),
('Luis' , 'Covas', '4', '2');



INSERT INTO employeeupdate_db.role (title, salary, department_id)
VALUES 
('CEO', 100000000, 1 ),
('venueManager', 65000,2),
('streamDirector', 55000, 3 ),
('captureTech', 50000, 4),
('cameraOperator', 75000, 5), 
('cloudManagement', 300000, 6);
