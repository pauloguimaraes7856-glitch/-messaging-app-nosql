import express from "express";
import { connectMongo } from "./db/mongo.js";
import usersRoutes from "./routes/users.js";
import messagesRoutes from "./routes/messages.js";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/messages", messagesRoutes);

app.get("/", (req, res) => {
    res.send("Messaging app API running");
});

await connectMongo();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});