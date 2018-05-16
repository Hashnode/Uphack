import encoding from './encoding';

export default async function makeRPC(txBody, publicKey, secret, cb) {
    let signature = nacl.sign.detached(nacl.util.decodeUTF8(JSON.stringify(txBody)), secret);

    let tx = {
        body: JSON.stringify(txBody),
        signature: encoding.toHexString(signature),
        publicKey: publicKey
    }

    let base64Data = nacl.util.encodeBase64(encoding.str2ab(JSON.stringify(tx)));

    const response = await fetch('/rpc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ base64Data: base64Data })
    });

    const json = await response.json();
    cb && cb(json);
}