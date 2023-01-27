import "reflect-metadata"
import { DataSource, Migration } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "developer",
    database: "scoder",
    entities: [ User ],
    migrations: [ "src/database/migrations/*.ts" ],
    migrationsTableName: "custom_migration_table"
})
