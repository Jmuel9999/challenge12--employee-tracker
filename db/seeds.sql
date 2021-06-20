USE employee_tracker;

INSERT INTO departments (name)
VALUES
    ('Sales'),
    ('Financials'),
    ('Human Resources'),
    ('Tech');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Leader', 100000, 1),
    ('Salesman', 70000, 1),
    ('Account Manager', 100000, 2),
    ('Accountant', 65000, 2),
    ('Head Engineer', 100000, 4),
    ('Engineer', 80000, 4),
    ('Head of Human Resources', 75000, 3),
    ('Human Resources', 65000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Michael', 'Johnson', 2, 1),
    ('Alexis', 'Chambers', 1, 1),
    ('Johnny', 'Flacks', 2, 1),

    ('Roger', 'Roliver', 3, 3),
    ('Stan', 'Darsh', 4, 3),
    ('Jason', 'Case', 4, 3),

    ('George', 'Hankey', 5, 5),
    ('Stephanie', 'Smith', 6, 5),

    ('Gordon', 'Sakes', 7, 7),
    ('Thomas', 'Pierce', 8, 7);
    
