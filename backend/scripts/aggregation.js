import { connectMongo, db } from "../db/mongo.js";

await connectMongo();

const messagesBySender = await db.collection("messages").aggregate([
    {
        $group: {
            _id: "$sender",
            totalMessages: { $sum: 1 }
        }
    }
]).toArray();

console.log("Messages grouped by sender:");
console.log(messagesBySender);

const messagesByReceiver = await db.collection("messages").aggregate([
    {
        $group: {
            _id: "$receiver",
            receivedMessages: { $sum: 1 }
        }
    }
]).toArray();

console.log("Messages grouped by receiver:");
console.log(messagesByReceiver);

process.exit();