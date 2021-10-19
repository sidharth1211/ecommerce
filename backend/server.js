import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'


connectDB()

dotenv.config()

const app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("API is running ")
})

app.use('/api/product', productRoutes)
app.use('/api/users',userRoutes)
app.use(notFound)

app.use(errorHandler)

app.listen(process.env.PORT||5000 ,console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))
