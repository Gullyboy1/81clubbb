import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: 'bqk3zhkpvokvlwwv1e0e-mysql.services.clever-cloud.com',
    user: 'umsjoxxluophxesp',
    password: 'iPOU3GR2RHkT1vPhPWHx',
    database: 'bqk3zhkpvokvlwwv1e0e'
});

export default pool;
