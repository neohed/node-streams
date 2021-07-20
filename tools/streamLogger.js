const stream = require('stream');

class StreamLogger extends stream.Transform {
    constructor() {
        super()
    }

    _transform(chunk, encoding, callback) {
        console.log(chunk.toString());
        this.push(chunk);
        callback()
    }
}

module.exports = StreamLogger;
