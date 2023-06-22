import * as winston from "winston";
import LokiTransport from "winston-loki";

let winstonTransports = []

winstonTransports.push(new winston.transports.Console())

let httpTransport = new LokiTransport({
    host: `http://${process.env.LOGS_HTTP_HOST}:${process.env.LOGS_HTTP_PORT}`,
    format: winston.format.json()
})
winstonTransports.push(httpTransport)

export const logger = winston.createLogger({
    transports: winstonTransports
})