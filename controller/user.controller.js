
const getDB = require('../db');

async function getname(req, res) {
    try {
        const db = await getDB();
        const users = db.collection('users');
        const result = await users.find().toArray();
        res.json(result);
    } catch (err) {
        res.status(500).send(err.message);
    }
}




async function insertname(req, res) {
    try {
        const db = await getDB();
        const users = db.collection('users');

        const { name, email } = req.body;

        const existing = await users.findOne({ name });
        if (existing) {
            return res.status(400).send("name already exists");
        }

        const result = await users.insertOne({ name, email });
        
        // Return the inserted document (with MongoDB _id)
        res.json({ _id: result.insertedId, name, email });
    } catch (err) {
        res.status(500).send(err.message);
    }
}


module.exports = { getname, insertname };



























