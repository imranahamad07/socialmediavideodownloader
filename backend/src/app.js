import express from 'express';
import cors from 'cors';
import downloadRoutes from './router/download.router.js';

export const app = express();

app.use(express.json({limit:'10mb'}));
app.use(cors());

app.use('/api',downloadRoutes);

