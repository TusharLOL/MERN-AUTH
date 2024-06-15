import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.routes.js';
import AuthRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'client','dist','index.html'))
})

app.use(express.json());

app.use(cookieParser());

app.listen(3000 , ()=>{
    console.log("Server at port 3000");
});

app.use("/api/user", UserRoutes);
app.use("/api/auth", AuthRoutes);

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        message,
        statusCode,
    });

})