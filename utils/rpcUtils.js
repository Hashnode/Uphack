import encoding from './encoding';

export default function makeRPC(txBody, publicKey, secret, cb) {
    let signature = nacl.sign.detached(nacl.util.decodeUTF8(JSON.stringify(txBody)), secret);

    let tx = {
        body: JSON.stringify(txBody),
        signature: encoding.toHexString(signature),
        publicKey: publicKey
    }

    let headers = {
        'Content-Type': 'text/plain',
        'Accept':'application/json-rpc'
    }

    let base64Data = nacl.util.encodeBase64(encoding.str2ab(JSON.stringify(tx)));

    let options = {
        url: 'http://localhost:46657',
        method: 'POST',
        headers: headers,
        json: true,
        body: {"jsonrpc":"2.0","method":"broadcast_tx_commit","params": { "tx" : base64Data } ,"id":"anything"}
    }

    request(options, function (error, response, body) {
        cb && cb(response.body);
    });
}