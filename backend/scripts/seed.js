import { connectMongo, db } from "../db/mongo.js";

await connectMongo();

await db.collection("users").deleteMany({});
await db.collection("messages").deleteMany({});

const users = [
    {
        username: "paulo",
        email: "paulo@test.com"
    },
    {
        username: "hetvi",
        email: "hetvi@test.com"
    },
    {
        username: "veena",
        email: "veena@test.com"
    }
];

await db.collection("users").insertMany(users);

const messages = [
    {
        sender: "paulo",
        receiver: "hetvi",
        content: "Hello Hetvi",
        createdAt: new Date()
    },
    {
        sender: "hetvi",
        receiver: "paulo",
        content: "Hi Paulo",
        createdAt: new Date()
    },
    {
        sender: "veena",
        receiver: "paulo",
        content: "Project update",
        createdAt: new Date()
    }
];

await db.collection("messages").insertMany(messages);

console.log("Sample data inserted");

process.exit();