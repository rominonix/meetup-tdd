import { Sequelize } from "sequelize";

const db = new Sequelize({
    storage:'src/connection/database.sqlite',
    dialect: 'sqlite',
})

export default db