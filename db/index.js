import { createConnection, getConnection } from 'typeorm';
import config from './config';

class Database {
    async getConnect() {
        this.conn = !this.conn || !this.conn.isConnected
            ? await createConnection(config.db)
            : this.conn;
    }

    async getRepository(target) {
        await this.getConnect();
        return Object.assign((await this.conn.getRepository(target)), {
            async dispose() {
                if (this.manager.connection.isConnected) {
                    try {
                        await this.manager.connection.close();
                    } catch (e) {
                        throw new Error(e);
                    }
                }
            },
        });
    }

    async createQueryBuilder(target, table) {
        this.conn = this.conn || await this.getConnect();
        return Object.assign(this.conn.createQueryBuilder(target, table), {
            async dispose() {
                if (this.manager.connection.isConnected) {
                    try {
                        await this.manager.connection.close();
                    } catch (e) {
                        throw new Error(e);
                    }
                }
            },
        });
    }

    async executeNativeQuery(query) {
        this.conn = this.conn || await this.getConnect();
        let result = null;
        try {
            result = Object.assign(await this.conn.manager.query(query));
        } finally {
            if (this.conn.manager.connection.isConnected) {
                await this.conn.manager.connection.close();
            }
        }
        return result;
    }

    async getConnection() {
        let connection;
        try {
            connection = await createConnection(config.db);
        } catch (e) {
            connection = await getConnection();
        }
        return Object.assign(connection, {
            async dispose() {
                await this.manager.connection.close();
            },
        });
    }
}

export default Database;
