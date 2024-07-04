const fs = require("fs");

function logError(error) {
    const errorMessage = `Time: ${new Date().toISOString()},Name: ${error.name},Message: ${error.message}\n`;
    fs.appendFile("error.txt", errorMessage, (err) => {
        if (err) console.error("Failed to write error log:", err);
    });
}

module.exports = {
    logError
};