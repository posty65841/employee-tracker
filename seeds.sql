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
('Thomas', 'post', '1',  "null" ),
('Jackson', 'Wallis', '2', '1'),
('Derik', 'Olssin', '5', '1' ),
('Austin', 'Post', '3', '2' ),
('Tommy', 'Blankenship', '4' '2' ),
('Julius', 'Lee', '2', '2');

-- role
INSERT INTO employeeupdate_db.role (title, salary, department)
VALUES 
('CEO', '100,000,000,', 'CEO' ),
('venuManager', '65,000','VenuManager'),
('director', '55,000', 'Director' ),
('capture', '50,000', 'Capture'),
('camera', '75,000', 'Camera'), 
('cloud', '300,000', 'Cloud')
