const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage mitu korda 2ratada: ', aratus => {
let i=1
while (i<=aratus){
    console.log('T6use ja s2ra!')
i++
}
    rl.close()
})

