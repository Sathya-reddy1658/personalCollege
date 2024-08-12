const express = require('express')
const app = express()
const port = 3000

app.use(cors());
app.set("view-engine","ejs")

app.all('*',(req,res)=>{
    res.status(404).send("404 NOT FOUND!")
})


//Global Catch:
//For Input Validation Errors:
app.use(function (err,req,res,next) {
    res.json({msg:"The Data which you entered is not Correct please Verify again"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})