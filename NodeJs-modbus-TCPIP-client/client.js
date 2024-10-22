const net = require('net');
const modbus = require('jsmodbus');

// Create a TCP socket
const clientSocket = new net.Socket();

// Define client options and create Modbus TCP client
const options = {
    host: '192.168.0.11', // The IP address of the Modbus server
    port: 502 // The port where the Modbus server is running (502 is standard for Modbus TCP)
};

const client = new modbus.client.TCP(clientSocket, 1); // 1 is the Unit ID

// Connect to the Modbus TCP server
clientSocket.connect(options, () => {
    console.log('Connected to Modbus server');


    // Example 1: Read 10 holding registers starting from address 40001
    client.readHoldingRegisters(0, 5)
        .then((response) => {
            console.log('Holding Registers:', response.response._body.values);
        })
        .catch((err) => {
            console.error('Error reading holding registers:', err);
        });


    // Example 2: Write a value to holding register 40005 (address 4 in the array)
    client.writeSingleRegister(8, 122)
        .then((response) => {
            console.log('Wrote to register 40005');
        })
        .catch((err) => {
            console.error('Error writing to register:', err);
        });
});

// Error handling
clientSocket.on('error', (err) => {
    console.error('Socket error:', err);
});

// Close the client when finished
clientSocket.on('close', () => {
    console.log('Connection closed');
});
