const config = {
    mongoConnectionString: process.env.MONGO_URL || 'mongodb://localhost:27017',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
}

module.exports = config;