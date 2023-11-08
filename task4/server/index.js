const express = require("express");
const app = express();
const mongoose = require("mongoose")
const mongoURI = 'mongodb+srv://Prithika:Y3RW4ZETip9nb7M0@cluster1.ikuqzgt.mongodb.net/';
const dotenv = require("dotenv");
const eventRoute = require("./routes/eventRoute")


dotenv.config();
const cors = require("cors");


 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});




app.use(express.json({limit: '50mb'}));
app.use(cors()) 
app.use("/api/events", eventRoute)



app.listen(process.env.PORT||5000, _=> console.log("backend server is running on port: "+ process.env.PORT))