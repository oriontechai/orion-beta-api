import * as dotenv from 'dotenv';
// OPEN AI
import { Configuration, OpenAIApi } from 'openai';

dotenv.config({ path: './.env' });

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});

export const openai = new OpenAIApi(configuration);