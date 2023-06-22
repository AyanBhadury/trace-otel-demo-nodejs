import 'dotenv/config'
import express from "express";
import {logger} from "./logger";

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World!');
    logger.info("Hello World log!")

});

app.listen(8080, () => {
    logger.info('Example app listening on port 8080! Access it: http://localhost:8080/hello');
});