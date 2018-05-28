const config = {
    mongoConnectionString: process.env.MONGO_URL || 'mongodb://localhost:27017',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    rpcUrl: process.env.RPC_URL || 'http://localhost:46657'
}

module.exports = config;