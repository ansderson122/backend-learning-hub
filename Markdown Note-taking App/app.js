const express = require('express')
const path = require("path");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()
const port = 3000

app.post("/upload-markdown",upload.single('markdownFile') ,(req,res)=>{
    console.log(req.file)
    res.sendStatus(200)

})


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./pages/index.html"));
  });


app.listen(port,
    ()=> console.log(`Server running on http://localhost:${port}/`)
)