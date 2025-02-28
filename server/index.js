import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import dotenv from 'dotenv';
import axios from 'axios';
import connectDB from './src/config/db.js';


const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }, { limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));    

connectDB().then(() => {
    app.listen(PORT, ()=> {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((err) => {
    console.log(err);
});

