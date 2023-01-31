"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const pg_1 = require("pg");
require('../config/env');
exports.connection = new pg_1.Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
});
