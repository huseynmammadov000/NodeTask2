const bcrypt = require("bcrypt");
const { logError } = require("./logger");
const saltRounds = 10;

const encryptString = async (myPlaintextPassword) => {
    try {
        const hash = await bcrypt.hash(myPlaintextPassword.myString, saltRounds);
        return hash;
    } catch (err) {
        logError(err);
        throw new Error("Encryption failed: " + err.message);
    }
};

const compareString = async (myString, hash) => {
    try {
        const result = await bcrypt.compare(myString, hash);
        return result;
    } catch (err) {
        logError(err);
        throw new Error("Comparison failed: " + err.message);
    }
};

module.exports = {
    encryptString,
    compareString
};