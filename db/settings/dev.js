import { External } from 'architecture-node-base';
import * as path from 'path';

const db = {
    name: 'default',
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    entities: [
        path.resolve(__dirname, '../../infrastructure/repositories/typeorm/schema/**/index.js'),
    ],
    migrations: [
        path.resolve(__dirname, '../../db/migration/*.js'),
    ],
    cli: {
        entitiesDir: path.resolve(__dirname, '../../infrastructure/repositories/typeorm/schema'),
        migrationsDir: path.resolve(__dirname, '../../db/migration'),
    },
    logging: true,
};

const factory = new External.TypeOrmConfigFactory(db).create();


const config = {
    port: 8082,
    secretKey: '{000-1-00232-111-931313-13142-12129-24-3333}',
    db: factory,
};

export default config;
