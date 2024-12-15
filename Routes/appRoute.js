import express from 'express';
import logger from '../logger.js';
const router = express.Router();
import userPromptEntry from '../Controller/appController.js';


router.use(logger, express.json());
router.route('/userPrompt').post(userPromptEntry);


export default router;