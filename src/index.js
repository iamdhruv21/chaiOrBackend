import connectDB from "./db/index.js";

// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import {app} from "./app.js";
dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is Running at Port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGODB Connection FAIL", err);
    })






/*
// A good approach but code become very messy so, we use another approach in which we put this in the another file and export that function

import express from 'express';
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on('error', (error) => {
            console.log("Err: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (err) {
        console.error(err.message);
    }
})()

*/