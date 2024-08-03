import { nanoid } from 'nanoid';
import URL from '../models/url.js';

async function handleGenerateNewShortUrl(req, res) {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortId = nanoid(8);

    try {
        await URL.create({
            shortId,
            redirectUrl: url,
            visitHistory: []
        });
        return res.json({ id: shortId });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
})
}

export { handleGenerateNewShortUrl,handleGetAnalytics };
