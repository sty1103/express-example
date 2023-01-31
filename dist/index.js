"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require('./src/configs/env');
const app = (0, express_1.default)();
if (app.get('env') == 'local')
    app.use((0, cors_1.default)());
// GKE Health Check
app.get('/api', (req, res) => {
    res.status(200);
});
app.post('/api/user', (req, res) => {
    res.send({ thisis: 'user' });
});
//////////
const { Client } = require('pg');
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});
app.post('/api/db', (req, res) => {
    client.connect();
    client.query(`INSERT INTO customer(password) VALUES('1234')`).then(() => {
        client.end();
        res.send({ insert: 'success' });
    });
});
app.listen('8080', () => {
    console.log(`Server listening on port: 8080`);
});
