import { getTestCompletion, getCompletion, getClientCompletion } from "../services/chat.service.js";
import { createEmbeddingsData, getEmbedding } from "../services/embedding.service.js";

export const testApi = async (req, res) => {
    try {
        const resBody = await getTestCompletion();
        res.status(200).send(resBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error : error.message });
    }
}

export const messageCompletion = async (req, res) => {
    try {
        const resBody = await getCompletion(req.body); 
        res.status(200).send(resBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error : error.message });
    }
}

export const updateBotData = async (req, res) => {
    try {
        const resBody = await createEmbeddingsData();
        res.status(200).send(resBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error : error.message });
    }
}

export const testEmbedding = async (req, res) => {
    try {
        const { text } = req.body;
        const resBody = await getEmbedding(text);
        res.status(200).send(resBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error : error.message });
    }
}

// CLIENT
export const clientMessageCompletion = async (req, res) => {
    try {
        const resBody = await getClientCompletion(req.body); 
        res.status(200).send(resBody);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error : error.message });
    }
}