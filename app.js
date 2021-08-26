const app = require('express')()
const port = process.env.port || 1117
const multer = require('multer')

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads')
  },
  filename: (req, file, callback) => {
    callback(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})

var upload = multer({ storage })

app.post('/', upload.any(), (req, res) => {
    console.log(req.files)  
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`App running..`)
})