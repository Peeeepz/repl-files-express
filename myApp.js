require('dotenv').config()
let express = require('express');
let app = express();
let absolutePath = __dirname + '/views/index.html'

console.log("Hello World")

// app.get("/", (req, res) => {
//   res.send("Hello Express")
// })
app.use(req, res, next) {

  
}
app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(absolutePath)
})

app.get("/json", (req, res) =>{
  res.json({"message" : process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json"})
})



































 module.exports = app;
