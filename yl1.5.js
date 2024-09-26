const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage ainepunktid arv: ', punktid => {
    rl.question('Sisestage n2dalate arv:',n2dalad=>{
        let tulemus = (punktid*26/n2dalad)
        console.log(Math.ceil (tulemus))
        rl.close()
    })})

