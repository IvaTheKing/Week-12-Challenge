const inquirer = require("inquirer");
const mysql = require("mysql");
const table = require("console.table");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ganggangganggang98!",
    database: "employees_db"
});

db.connect((err) => {
    if (err) throw err;
    console.log("You are connected to the employee database");
});

const home = async () => {
    const variable = await inquirer
    .prompt({
        type: "list",
        name: "landing",
        message: "What is thy bidding my master?",
        choices: [
            "View thy employees",
            "Recruit a new employee",
            "Reselect thy employee's role",
            "Peruse all possible roles",
            "Create a new role",
            "View thy departments",
            "Create a new department",
            "Quit",
            "View all thy employees"
        ]
    })
    .then((variable) => {
        switch (variable.home) {
            case "View thy employees":
                viewEmployees();
                break;
            case "Recruit a new employee":
                recruitEmployee();
                break;
            case "Reselect they employee's role":
                reselectEmployeeRole();
                break;
            case "Peruse they employee's role":
                peruseEmployeeRole();
                break;
            case "Create a new role":
                createNewRole();
                break;
            case "Quit":
                quitQuit();
                break;
            case "View all thy employees":
                viewAllEmployees();
                break;
        }
    })
};


const viewEmployees = () => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        home();
    })
}

const recruitEmployee = () => {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your employee's first name?",
            name: "first_name",
        },
        {
            type: "input",
            message: "What is your employee's last name?",
            name: "last_name",
        },
        {
            type: "input",
            message: "What is your employee's role?",
            name: "role_id",
        },
        {
            type: "input",
            message: "Who is your employee's manager?",
            name: "manager_id",            
        }
    ])
    .then((variable) => {
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id", [variable.first_name, variable.last_name, variable.role_id, variable.manager_id], (err, res) => {
            if (err) throw err;
            console.table(res);
        });

    })
    home();
}

const reselectEmployeeRole = async (employeeId) => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "employee_id",
            messagae: "Who's (employee_id) role are we updating today?",
        },
        {
            type: "input",
            name: "role_id",
            message: "What is their new role?",
        },
    ])
    .then((variable) => {
        db.query("UDPATE employee SET role_id = ? WHERE id = ?", [variable.role_id, variable.employee_id], (err, res) => {
            console.table(res);
        });
    });

}


const peruseEmployeeRole = () => {
    const sql = "SELECT * FROM role";
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        home();
    });
}

const createNewRole = () => {
    inquirer
    .prompt([
        {
            type: "input",
            name: "newRole",
            message: "What is the new role?",
        },
        {
            type: "input",
            name: "roleSalary",
            message: "What is the new role's salary?",
        },
        {
            type: "input",
            name: "roleDepartment",
            message: "What is the department for the new role?",
        },
    ])
    .then((variable) => {
        db.query("INSERT INTO role (new role, role salary, role department)", [variable.newRole, variable.roleSalary, variable.roleDepartment], (err, res) => {
            if (err) throw err;
            console.table(res);
        });
    });
    home();
}

const quitQuit = () => {
    db.end();
    process.exit();
}

const viewAllEmployees = () => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        home();
    })
}