import winston from 'winston';

const logFormat = winston.format.printf((info)=>{
    let date = new Date().toISOString();
    return `${date} [${info.level}]: ${info.message}`;

})

export const logger = winston.createLogger({
    level:'debug',
    format:winston.format.combine(winston.format.colorize(),logFormat),
    transports: [new winston.transports.Console()]
})

