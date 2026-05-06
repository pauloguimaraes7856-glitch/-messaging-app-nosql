import express from "express";
import { db } from "../db/mongo.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const messages = await db.collection("messages").find().toArray();

    res.json(messages);
});

router.post("/", async (req, res) => {
    const message = {
        sender: req.body.sender,
        receiver: req.body.receiver,
        content: req.body.content,
        createdAt: new Date()
    };

    const result = await db.collection("messages").insertOne(message);

    res.status(201).json({
        message: "Message sent",
        messageId: result.insertedId
    });
});

export default router;