const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisestage Leedu perenimi: ", nimi=>{
    console.log(nimi.slice(-2))
    console.log(nimi.slice(-1))
    rl.close()
})



