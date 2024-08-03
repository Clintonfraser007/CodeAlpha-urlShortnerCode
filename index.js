import express from 'express';
import UrlRoute from './routes/url.js';
import { connectToMongoDB } from './connect.js';
import URL from './models/url.js';
const app = express();
const PORT = 3000;

connectToMongoDB('mongodb://localhost:27017/short-url')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    });

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/:shortId',async (req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    },{$push:{
        visitHistory:{timestamp:Date.now()}
    }})
    res.redirect(entry.redirectUrl)
})

app.use('/url', UrlRoute);

app.listen(PORT, () => {
    console.log(`Server is up at PORT ${PORT}`);
});
