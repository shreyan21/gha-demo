import express from "express"
import cors from "cors"
const app=express()

app.use(express.json())
app.use(cors())

app.get("/home",async(req,res)=>{
    return res.send("This is home route")
})

app.listen(5000)