const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
  res.status(200).json({
      message:"node.js_mongodb_API",
      version:"1.0.0",
      status:process.env.STATUS
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})