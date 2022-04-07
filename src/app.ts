import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
})

const port =  2666;
app.listen(port, () => {
    console.log('App is ready');
})
