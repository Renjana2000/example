const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'exampleDb';

let db;

async function getDB() {
    if (db) return db; 
    const client = await new MongoClient(url).connect();
    console.log("Connected to MongoDB");
    db = client.db(dbName);
    return db;
}

module.exports = getDB;