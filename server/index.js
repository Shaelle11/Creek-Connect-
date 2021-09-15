import express from 'express';
import connectDB from './db';
import dotenv from 'dotenv';
import router from './routes/authRouter';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

// initialize express
const app = express();

// middleware
app.use(express.json());
app.use(cors({origin:"http://localhost:3000"}));
app.use(cookieParser())

// Routes
app.use('/api', router)

// Home route
app.get('/', (req,res)=>{
    res.send('Welcome to CreekConnect')
})

// server function
const startServer = async()=>{
    try {
        await connectDB()
        app.listen(process.env.PORT, ()=>{
            console.log(`Server started on port ${process.env.PORT}`);
        })
    } catch (err) {
        console.log(object);
        process.exit(1)
    }
}

startServer()