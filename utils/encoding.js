export default {
    toHexString: (byteArray) => {
        return Array.prototype.map.call(byteArray, function(byte) {
            return ('0' + (byte & 0xFF).toString(16)).slice(-2);
        }).join('');
    },

    str2ab: (str) => {
        return new TextEncoder("utf-8").encode(str);
    },

    hex2ab: (hexString) => { 
        var result = [];
        while (hexString.length >= 2) {
            result.push(parseInt(hexString.substring(0, 2), 16));
            hexString = hexString.substring(2, hexString.length);
        }
        return new Uint8Array(result);
    }
}