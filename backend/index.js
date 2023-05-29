const express = require("express");
const userModel = require("./userModel");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // to accept json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post("/signup", async (req, res) => {
  const { username, email } = req.body;
  
  const doc = new userModel(req.body);
  console.log(req.body)
  try{
    const existingUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (existingUser) {
      return res.status(409).send("Username or email already exists");
  
    }
    await doc.save();
    res.send("Succesfully signup")
  }
  
  catch(err){
    console.log(err);
    res.status(400).send("error occured")    
  }
  
})



app.listen(8080, () => {
  console.log("Server started");
})
