import express from 'express';
import router from './Routes/appRoute.js';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

const port = process.env.port || 3000;

app.use('/api/v1', router);

const start = async () => {
    app.listen(port, console.log(`server listening on port ${port}...`))
}

start();