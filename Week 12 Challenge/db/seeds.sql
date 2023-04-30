INSERT INTO department (departmentName);

VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");


INSERT INTO role (title, department_id, salary);

VALUES ("Salesperson, 1, 58000"),
       ("Lead Engineer, 2, 113430"),
       ("Software Engineer, 2, 98050"),
       ("Account Manager, 3, 142000"),
       ("Accountant, 3, 54000"),
       ("Legal Team Lead, 4, 184709"),
       ("Lawyer, 4, 120000");


INSERT INTO employee (first_name, last_name, role_id, manager_id);

VALUES ("Gustavo, Rivera, 1, 3"),
       ("Anamari, Gorajuria, 2, NULL"),
       ("Jesse, Fajardo, 3, NULL"),
       ("Parker, Mullhearn, 4, 3"),