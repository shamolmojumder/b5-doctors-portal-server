const express = require('express')
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()  

const app = express();
const port = process.env.PORT|| 5000

app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gnhfc1r.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
      try{
        await client.connect();
        const serviceCollection=client.db("doctors_portal").collection("services");

        app.get("/service",async(req,res)=>{
          const query={};
          const cursor=serviceCollection.find(query);
          const services=await cursor.toArray();
          res.send(services)
        })
      }
      finally{

      }
}

run().catch(console.dir())

app.get('/', (req, res) => {
  res.send('Hello from doctor portal server')
})

app.listen(port, () => {
  console.log(`Doctor portal listening on port ${port}`)
})

