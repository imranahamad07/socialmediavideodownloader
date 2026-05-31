import express from 'express';
import cors from 'cors';
import downloadRoutes from './router/download.router.js';

export const app = express();

app.use(express.json({limit:'10mb'}));
app.use(cors({
    origin: [
        "https://socialmediavideodownloader-ashen.vercel.app/",
        "http://localhost:5173"
    ]
}));

app.use('/api',downloadRoutes);

