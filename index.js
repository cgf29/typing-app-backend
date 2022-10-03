import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import axios from 'axios';
import TextSchema from './schemas/Text.js'

const app = express()
app.use(cors())

const url = 'mongodb+srv://admin:xEcZ4F2YPxwhAHQ0@cluster0.ppq7mkc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url)

setInterval(() => {

}, 5000);


app.get('/', async (req, res) => {
    const words = await axios.get('https://gist.githubusercontent.com/deekayen/4148741/raw/98d35708fa344717d8eee15d11987de6c8e26d7d/1-1000.txt')
        .then(res => res.data.toString().replaceAll('\n', ' ').split(' '))
    // const schema = await TextSchema.create({ text: ['t', 'b'] })
    const randomWords = []
    const lineEnds = []
    for (let i = 0; i < 100; i++) {
        randomWords.push(words[Math.floor(Math.random() * 1000)])
        if (randomWords.slice(lineEnds[lineEnds.length - 1], i).join(' ').length > 42 && randomWords.slice(lineEnds[lineEnds.length - 1], i).join(' ').length < 50) {
            lineEnds.push(i)
        }
        console.log(lineEnds)
    }
    res.json({
        status: 'ok', data: { words: randomWords, lineEnds }
    })
})
app.listen(8000, () => {
    console.log('ok')
})