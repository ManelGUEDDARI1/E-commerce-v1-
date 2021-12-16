const express = require ('express');
const mongoose = require ('mongoose');
const productRouter = require ('./routes/productRouter') ;
const userRouter = require('./routes/userRouter');
const dotenv = require ('dotenv');
dotenv.config();
const app = express();
// use middleware
app.use(express.json());

//setting for transform any information in boby to req.body
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/Electronica');

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const port = process.env.PORT || 5000;
app.listen(port,(err)=>{
    err ? console.log(err): console.log('server is running')
   
})

