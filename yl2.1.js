const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisesta 6hutemperatuur: ", temperatuur => {
if(temperatuur < 4.0){
    console.log("On j22tumise oht.")
} else{
    console.log("Ei ole j22tumise ohtu.")
}
rl.close()
} )