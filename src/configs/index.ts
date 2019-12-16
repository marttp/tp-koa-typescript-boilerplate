import dotenv from 'dotenv';
dotenv.config();

export interface IConfig {
    port: number;
    // debugLogging: boolean;
    jwtSecret: string;
    // databaseUrl: string;
    // dbEntitiesPath: string[];
}

// const isDevMode = process.env.NODE_ENV == 'development';

const mainConfig: IConfig = {
    port: +process.env.KOA_SERVER_PORT || 8080,
    // debugLogging: isDevMode,
    jwtSecret: process.env.JWT_SECRET || 'internal-secret',
    // databaseUrl: process.env.DATABASE_URL || 'postgres://user:pass@localhost:5432/apidb',
    // dbEntitiesPath: [
    //   ... isDevMode ? ['src/entity/**/*.ts'] : ['dist/entity/**/*.js'],
    // ],
};

export { mainConfig };