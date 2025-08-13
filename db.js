const { MongoClient } = require('mongodb');

// Use environment variable for MongoDB connection
const url = process.env.MONGODB_URI;  
const dbName = 'exampleDb';
let db;

async function getDB() {
    if (db) return db;

    try {
        const client = await new MongoClient(url).connect();
        console.log("Connected to MongoDB");
        db = client.db(dbName);
        return db;
    } catch (err) {
        console.error("MongoDB connection error:", err);
        throw err;
    }
}

module.exports = getDB;









// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'exampleDb';

// let db;

// async function getDB() {
//     if (db) return db; 
//     const client = await new MongoClient(url).connect();
//     console.log("Connected to MongoDB");
//     db = client.db(dbName);
//     return db;
// }

// module.exports = getDB;