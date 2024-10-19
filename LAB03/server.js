const connect = require('connect');
const url = require('url');

const app = connect();

function calculate(req, res, next) {
    const queryObject = url.parse(req.url, true).query; // Retrieve the specified operation (add, subtract, etc.)
    const method = queryObject.method;
    const x = parseFloat(queryObject.x); // Extract the first number and convert it to a floating-point value
    const y = parseFloat(queryObject.y); // Extract the second number and convert it to a floating-point value
    let result;
    let operation;
// Identify the operation to execute based on the specified method
    switch (method) {
        case 'add':
            result = x + y;
            operation = '+';
            break;
        case 'subtract':
            result = x - y;
            operation = '-';
            break;
        case 'multiply':
            result = x * y;
            operation = '*';
            break;
        case 'divide':
            if (y === 0) {
                res.end('Error: Division by zero');
                return;
            }
            result = x / y;
            operation = '/';
            break;
        default:
            res.end('Error: Invalid method');
            return;
    }

    res.end(`${x} ${operation} ${y} = ${result}`);
}

app.use('/lab2', calculate);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
