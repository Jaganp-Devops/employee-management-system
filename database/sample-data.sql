USE employee_db;

-- Default admin user
-- username: admin | password: Admin@123  (CHANGE THIS after first login!)
INSERT INTO users (username, email, password, role) VALUES
('admin', 'admin@company.com', '$2b$10$CH4lQghoxx85T2fxzo7K6evkSUI.UccDK8dQ5l34sCHUWwipMo/eq', 'admin');

-- Sample employees
INSERT INTO employees (first_name, last_name, email, phone, department, position, salary, hire_date, status) VALUES
('Arun', 'Kumar', 'arun.kumar@company.com', '9876543210', 'Engineering', 'Software Engineer', 65000.00, '2023-01-15', 'active'),
('Priya', 'Sharma', 'priya.sharma@company.com', '9876543211', 'Human Resources', 'HR Manager', 72000.00, '2022-06-01', 'active'),
('Vikram', 'Singh', 'vikram.singh@company.com', '9876543212', 'Sales', 'Sales Executive', 48000.00, '2023-09-10', 'active'),
('Deepa', 'Nair', 'deepa.nair@company.com', '9876543213', 'Finance', 'Financial Analyst', 58000.00, '2021-11-20', 'active'),
('Rahul', 'Verma', 'rahul.verma@company.com', '9876543214', 'Engineering', 'Senior Developer', 85000.00, '2020-03-05', 'on_leave'),
('Sneha', 'Iyer', 'sneha.iyer@company.com', '9876543215', 'Marketing', 'Marketing Lead', 68000.00, '2022-02-14', 'active');
