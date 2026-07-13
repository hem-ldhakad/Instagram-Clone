const express = require('express')
const postModel = require('./models/post.model.js')
const multer = require('multer')
const uploadFile = require('./services/storage.service.js')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const upload =  multer({storage: multer.memoryStorage() })
//form-data for image not raw

app.post('/create-post', upload.single("image"), async(req, res) => {

    const result = await uploadFile(req.file.buffer)
    const post = await(postModel.create({
        image: result.url,
        caption: req.body.caption
    }))
    return res.status(201).json({
        message: "post created",
        post
    })
})

app.get('/posts', async(req, res) => {
    const posts = await postModel.find()
     return res.status(200).json({
        message: "posts fetched successfully",
        posts
     })
})

module.exports = app;