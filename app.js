const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

// Handling GET request
app.get("/get",(req,res)=>{
    console.log("get Request Successfull!");
    console.log(req.body);
    res.json({ message: "Data GET request received" });
});
//Handling POST request
app.get("/post",(req,res)=>{
    console.log("PUT Request Successfull!");
    console.log(req.body);
    res.send("Data Post request Recieved");
});

// Handling PUT request
app.put("/put",(req,res)=>{
    console.log("PUT Request Successfull!");
    console.log(req.body);
    res.send("Data Update request Recieved");
});

// Handling DELETE request
app.delete("/delete",(req,res)=>{
    console.log("DELETE Request Successfull!");
    console.log(req.body);
    res.send("Data DELETE request Recieved");
});

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
});
