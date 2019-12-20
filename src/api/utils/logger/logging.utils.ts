import winston, { loggers, format, silly } from 'winston';
import moment from 'moment';

import 'winston-daily-rotate-file';

import { LOG_TYPE } from '../../../configs/constants';

const ROOT_PATH = process.env.LOG_ROOT_PATH;
const ROOT_LOG_PATH = `${ROOT_PATH}/${LOG_TYPE.ROOT}`;
const DETAIL_LOG_PATH = `${ROOT_PATH}/${LOG_TYPE.DETAIL}`;

const LOG_DATE_FORMAT = 'YYYYMMDDHHmmssSSS'

function getDailyRotateConfig(fileName, level = 'silly', datePattern = LOG_DATE_FORMAT) {
  return {
    timestamp: () => {
      return moment();
    },
    fileName,
    datePattern,
    level,
    handleExceptions: true,
    frequency: '30m',
    maxSize: '10m',
  };
}

function generateLog(path, type) {
    const logName = process.env.LOG_NAME;
    let filePath = `${logName}_${type}`;

    const consoleLog = new winston.transports.Console({
      level: 'silly',
      handleExceptions: true,
    });
    const rotateFileConfig: any = getDailyRotateConfig(`${path}/${filePath}_%DATE%.log`)
    const fileLog = new winston.transports.DailyRotateFile(rotateFileConfig);

    loggers.add(type, {
      format: format.combine(winston.format.printf(info => `${info.message}`)),
      transports: [consoleLog, fileLog],
    });
}

generateLog(ROOT_LOG_PATH, LOG_TYPE.ROOT);
generateLog(DETAIL_LOG_PATH, LOG_TYPE.DETAIL);