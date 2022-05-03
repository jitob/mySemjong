// const socket = io();

// socket.on("TF116", (message) => {
//   console.log(message);
//   document.getElementById("data").innerHTML = message;
// });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors()) 

mongoose.connect('mongodb+srv://jigme:jitob56@cluster0.9c0us.mongodb.net/mySemjongDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
});

const userSchema = new mongoose.Schema({
    name: String, 
    email: String, 
    password: String
})
const User = new mongoose.model("User", userSchema)
// routes
app.post("/Login", (req, res) => {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        console.log(user)
        if(user){
            if(password == user.password){
                res.send({message: "Login Successful", user: user})
                
            } else {
                res.send({message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not Registered"} )
        }
    })
}) 

app.post("/Register", (req, res) => {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User Already exist"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save( err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered"})
                }
            })
        }
    })
}) 
app.listen(9002,() => {
    console.log("BE started at port 9002")
})

// mongodb+srv://jigme:<password>@cluster0.9c0us.mongodb.net/myFirstDatabase?retryWrites=true&w=majority