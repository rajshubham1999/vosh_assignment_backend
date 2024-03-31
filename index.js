const express=require("express");
require('dotenv').config();
const cors = require("cors");

const app = express();
const dbConfig = require('./config/dbConfig');
const PORT = process.env.PORT || 3001 
app.use(cors());

app.use(express.json());

 const userRoute = require("./routes/userRoutes");
 const productRoute = require("./routes/productRoutes")
app.use('/api/user',userRoute);
app.use('/api/product',productRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})
