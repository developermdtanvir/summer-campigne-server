const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config()
const cors = require('cors');

const port = process.env.PORT || 5001

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gzw4htn.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send({message:'my server is running on port '});
})


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });



  async function run() {

    const summerCollection = await client.db('summer').collection('countries')



    try {

        app.get('/countries',async(req,res)=>{
            const query = {}
            const cursor = await summerCollection.find(query)
            const result = await cursor.toArray()
            res.send(result);

        })
      
    } finally {
      
    }
  }
  run().catch(console.dir);


app.listen(port,()=>console.log(`server is listening on port ${port}`));