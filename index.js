import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import axios from 'axios';
import TextSchema from './schemas/Text.js'

const app = express()
app.use(express.json())
app.use(cors({
    origin: "https://jazzy-treacle-7c635b.netlify.app/",
}))

const url = 'mongodb+srv://admin:xEcZ4F2YPxwhAHQ0@cluster0.ppq7mkc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)




app.get('/', async (req, res) => {
    try {
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Origin", "https://jazzy-treacle-7c635b.netlify.app/");
        // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        // res.header("Access-Control-Allow-Methods", "GET");
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const words = await axios.get('https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt')
            .then(res => res.data.toString().replaceAll('\n', ' ').split(' '))
        // const schema = await TextSchema.create({ text: ['t', 'b'] })
        const words1 = []
        const words2 = []
        const words3 = []
        const words4 = []
        const words5 = []
        for (let i = 0; i < 100; i++) {
            if (i < 20 && i >= 0) {
                words1.push(words[Math.floor(Math.random() * 1000)])
            } else if (i < 40 && i >= 20) {
                words2.push(words[Math.floor(Math.random() * 1000)])
            } else if (i < 60 && i >= 40) {
                words3.push(words[Math.floor(Math.random() * 1000)])
            } else if (i < 80 && i >= 60) {
                words4.push(words[Math.floor(Math.random() * 1000)])
            } else if (i < 100 && i >= 80) {
                words5.push(words[Math.floor(Math.random() * 1000)])
            }
        }
        res.json({
            status: 'ok', data: [words1, words2, words3, words4, words5]
        })
    } catch (err) {
        res.send(err)
    }
})
app.listen(8000, () => {
    console.log('ok')
})
