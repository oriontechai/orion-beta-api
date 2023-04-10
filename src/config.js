import * as dotenv from 'dotenv';
// OPEN AI
import { Configuration, OpenAIApi } from 'openai';
// FIREBASE
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

dotenv.config({ path: './.env' });

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "orion-ui.firebaseapp.com",
    projectId: "orion-ui",
    storageBucket: "orion-ui.appspot.com",
    messagingSenderId: "473487535427",
    appId: "1:473487535427:web:f0b9d09df8fbcef28393f6",
    databaseURL: process.env.REALTIME_DDBB_FIREBASE
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getDatabase(app);
