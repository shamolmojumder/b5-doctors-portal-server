const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT|| 5000

app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://doctor_admin:<password>@cluster0.gnhfc1r.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
  res.send('Hello from doctor portal server')
})

app.listen(port, () => {
  console.log(`Doctor portal listening on port ${port}`)
})

