import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import downloadRoutes from './router/download.router.js';

export const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json({limit:'10mb'}));
app.use(cors({
    origin: [
        "https://socialmediavideodownloader-ashen.vercel.app",
        "http://localhost:5173"
    ],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use('/api',downloadRoutes);

