// returns an Object from b64 encoded JSON
const b64Decode = (string, encoding) => {
    try {
        return JSON.parse(Buffer.from(string, "base64").toString(encoding));
    } catch(error) {
        throw new Error("Unexpected format for String");
    }
};

const encodeString = (string, encoding = "utf-8") => {
    try {
        return Buffer.from(string, encoding).toString("base64");
    } catch(error) {
        throw new Error("Unexpected format for String.");
    }
};

module.exports = {
    b64Decode,
    encodeString
}