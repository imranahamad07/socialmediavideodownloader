import express from 'express';
const router = express.Router();

import { download } from '../controller/download.controller.js';

router.post('/download',download);

export default router;