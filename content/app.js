const {readFileSync , writeFileSync} = require('fs')

const first = readFileSync('f.txt','utf8');
// const s = readFileSync('node/content/s.txt','utf8');

 const g=writeFileSync('result.txt',"hello");
console.log(first);