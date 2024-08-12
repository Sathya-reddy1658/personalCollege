//Routing of all the pages are gonna be done here 

const express = require('express')
const app = express()
const port = 8080

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  res.render('index')
})

app.all('*',(req,res)=>{
    res.status(404).send("404 NOT FOUND!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})