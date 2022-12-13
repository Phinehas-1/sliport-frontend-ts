const path = require('path');
module.exports = {
    mode: 'production',
    entry: './srcjs/Events.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'srcpack')
    },
}