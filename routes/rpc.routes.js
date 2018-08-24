const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('../config');

router.route('/rpc').post((req, res) => {
    const base64Data = req.body.base64Data;

    let headers = {
        'Content-Type': 'text/plain',
        'Accept':'application/json-rpc'
    }

    let options = {
        url: config.rpcUrl,
        method: 'POST',
        headers: headers,
        json: true,
        body: {"jsonrpc":"2.0","method":"broadcast_tx_commit","params": { "tx" : base64Data } ,"id":"anything"}
    }

    request(options, function (error, response, body) {
        res.json({ body: response.body });
    });
});

module.exports = router;
