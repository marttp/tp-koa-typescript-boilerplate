import winston, { loggers } from 'winston';

const LOG_TYPE = {
    ROOT: 'root',
    DETAIL: 'detail'
  };

const logger = {
    root: {
        info: () => {
            winston.loggers.get('root').info('test')
        },
        debug: () => {
            winston.loggers.get('root').debug('test')
        },
        error: () => {
            winston.loggers.get('root').error('test')
        }
    },
    detail: {
        info: () => {
            winston.loggers.get('root').info('test')
        },
        debug: () => {
            winston.loggers.get('root').debug('test')
        },
        error: () => {
            winston.loggers.get('root').error('test')
        }
    }
}