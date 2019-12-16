import moment from 'moment';

const getCurrentDateTimeFormat = () => {
    return moment().format('YYYYMMDD');
}

const getCurrentTimeStamp = () => {
    return Date.now();
}

export {
    getCurrentDateTimeFormat,
    getCurrentTimeStamp
}