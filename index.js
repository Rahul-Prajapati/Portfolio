import express from 'express';
import mongoose from  'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

const app = express();

 dotenv.config();
import portfolioRoute from './server/routes/portfolioRoute.js';


app.use("/api/portfolio", portfolioRoute);

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGODB_ACC)
.then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(4000, () => {
    console.log('Server is running on port 4000!');
    }
)

const __dirname = path.resolve(); 
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})