const crypto = require('crypto')

const ed25519 = require('ed25519');

const bobsPassword = 'This is my password, you don`t guess it!';
let hash = crypto.createHash('sha256').update(bobsPassword).digest();
let bobKeypair = ed25519.MakeKeypair(hash);

console.log(bobKeypair);

