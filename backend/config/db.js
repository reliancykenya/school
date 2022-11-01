import { Sequelize } from "sequelize";

export const db = new Sequelize('may_online', 'root', '', {
    host : "localhost",
    dialect : "mysql"
})

export default db;