const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage mitu korda 2ratada: ', aratus => {
for(let  i= 0; i < aratus; i++){
    console.log('T6use ja s2ra!');}
    rl.close()
})

