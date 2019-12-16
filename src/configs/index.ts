import dotenv from 'dotenv';
dotenv.config();

export interface IConfig {
    port: number;
    jwtSecret: string;
    // databaseUrl: string;
}

const mainConfig: IConfig = {
    port: +process.env.KOA_SERVER_PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || 'internal-secret',
    // databaseUrl: process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/your_database',
};

export { mainConfig };