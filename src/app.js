import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({extended: true, limit: '16kb'})) // sometime when data come to backend from url something like % convert to something like this -> ssd to handel this we use this middleware

app.use(express.static("public"))// to use static files like images and css we configure this and in this we give path of our static files
app.use(cookieParser())

//routes import
import userRoutes from "./routes/user.routes.js";


//routes Declaration
app.use("/api/v1/users", userRoutes)


export { app }