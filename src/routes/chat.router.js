import { Router } from "express";
import { 
    testApi, 
    messageCompletion, 
    updateBotData, 
    testEmbedding, 
    clientMessageCompletion 
} from "../controllers/chat.controller.js";
const router = Router();

router.get("/api/v1/chat/test-api", testApi)

// GENERAL
router.post("/api/v1/chat/get-completion", messageCompletion);

router.get("/api/v1/chat/update-data", updateBotData);

router.post("/api/v1/chat/test-emb", testEmbedding);
//ccc
// CLIENT
router.post("/api/v1/chat/client/get-completion", clientMessageCompletion);

export default router;