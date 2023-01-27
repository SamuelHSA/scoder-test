import { createConnection, Connection } from 'typeorm';

const connection = createConnection({ 
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "developer",
    database: "scoder"
}).then(() => console.log('Successfuly connected database'));