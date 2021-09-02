import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js';

const app = express();

app.use(express.json({
    limit: "20mb",
    extended: "true"
}));
app.use(express.urlencoded({
  limit: "20mb",      
  extended: "true"
}));
app.use(cors());
app.use('/students', studentRoutes);

const connection_url = 'mongodb+srv://Rohan:newuser@2021@cluster0.z017y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(connection_url, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => app.listen(PORT, () => 
    console.log(`Connection is established at port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify',false);