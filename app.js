const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

const port = process.env.PORT || 5001

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gzw4htn.mongodb.net/?retryWrites=true&w=majority`

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




app.listen(port,()=>console.log(`server is listening on port ${port}`));