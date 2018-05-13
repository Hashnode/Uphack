const MongoClient = require('mongodb').MongoClient;
const config = require('./config');
let _db;

module.exports = {
    getDB: () => {
        return _db;
    },

    connect: () => {
        MongoClient.connect(config.mongoConnectionString, function(err, client) { 
            const db = client.db('tendermintdb');
            _db = db;
        });
    }
}