import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DBSE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
  })
  .promise();
