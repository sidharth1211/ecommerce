import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'

connectDB()

dotenv.config()

const app = express();

app.get('/',(req,res)=>{
    res.send("API is running ")
})


app.get('/api/product',(req,res)=>{
    res.json(products);
})

app.get('/api/product/:id',(req,res)=>{
    const product = products.find(p => p._id === req.params.id)
    res.json(product);
})
app.listen(process.env.PORT||5000 ,console.log(`server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold))
