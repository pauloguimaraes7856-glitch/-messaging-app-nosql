Messaging App NoSQL Project

Project Idea

The goal of this project is to create a simple messaging application using multiple NoSQL databases.

MongoDB is used to store users and messages.
Neo4j is prepared for relationships between users.
Redis is prepared for caching and fast temporary data.

The backend was developed using Node.js and Express.

⸻

Technologies Used

* Node.js
* Express
* MongoDB
* Neo4j
* Redis
* Docker Compose

⸻

Project Structure

-messaging-app-nosql/
├── docker-compose.yml
├── backend/
│   ├── index.js
│   ├── db/
│   │   ├── mongo.js
│   │   ├── neo4j.js
│   │   └── redis.js
│   ├── routes/
│   │   ├── users.js
│   │   ├── messages.js
│   │   └── relations.js
│   └── scripts/
│       ├── seed.js
│       └── aggregation.js

⸻

Run the Project

1. Start Docker containers

docker compose up -d

2. Go to backend folder

cd backend

3. Install dependencies

npm install

4. Start the backend server

npm run dev

The Express backend server will run on:

http://localhost:3000

⸻

API Routes

Users

Create user

POST /users

Get users

GET /users

⸻

Messages

Create message

POST /messages

Get messages

GET /messages

⸻

Sample Data Script

The project includes a seed script used to automatically insert sample users and messages into MongoDB.

Run the script with:

node scripts/seed.js

⸻

MongoDB Aggregation Pipelines

The project also includes aggregation pipelines used to analyze the messages collection.

Run the aggregation script with:

node scripts/aggregation.js

The aggregation pipelines:

* group messages by sender
* count how many messages each user sent
* group messages by receiver
* count how many messages each user received

⸻

Docker Compose

Docker Compose is used to run MongoDB, Neo4j and Redis as separate containers.

The docker-compose.yml file exposes the required ports so the backend can communicate with the databases locally.

⸻

Authors

* Paulo Guimarães
* Hetvi
* Veena