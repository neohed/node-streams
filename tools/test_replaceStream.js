const ReplaceStream = require('./replaceStream');

const rs = new ReplaceStream('World', 'Node.js');
rs.on('data', chunk => console.log(chunk.toString()))

rs.write('8sdifjh Hello W');
rs.write('o')
rs.write('rl')
rs.write('d 8sdifjh Hello Worl_')
rs.end();
