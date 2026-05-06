import express from "express";
import { db } from "../db/mongo.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await db.collection("users").find().toArray();
    res.json(users);
});

router.post("/", async (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        createdAt: new Date()
    };

    const result = await db.collection("users").insertOne(user);

    res.status(201).json({
        message: "User created",
        userId: result.insertedId
    });
});

export default router;