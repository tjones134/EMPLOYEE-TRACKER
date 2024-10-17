import pkg from 'pg'; // Importing the pg module
const { Client } = pkg; // Destructuring to get Client

const client = new Client({
    user: 'postgres', // Your database username
    host: 'localhost', // Database host
    database: 'employee_tracker', // Your database name
    password: 'Aaliyah16!', // Your password
    port: 5432, // Database port
});

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to the database!');

        // Fetch departments
        const departmentsResult = await client.query('SELECT * FROM departments;');
        console.log('Departments:', departmentsResult.rows);

        // Fetch roles
        const rolesResult = await client.query('SELECT * FROM roles;');
        console.log('Roles:', rolesResult.rows);

        // Fetch employees
        const employeesResult = await client.query('SELECT * FROM employees;');
        console.log('Employees:', employeesResult.rows);
    } catch (err) {
        console.error('Error connecting to the database:', err);
    } finally {
        await client.end(); // Make sure to end the client connection
    }
}

connectToDatabase();
