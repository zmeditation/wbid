const rotatingLogStream = require('file-stream-rotator').getStream(
    {
        filename: "./app/logs/%DATE%.log",
        frequency: "daily",
        verbose: true,
        date_format: "DD-MM-YYYY"
    });

module.exports = rotatingLogStream;
