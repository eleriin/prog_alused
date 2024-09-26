const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage oma nimi: ', nimi => {
    rl.question('Sisestage lubatud kiirus:',lubatud=>{
    rl.question('Sisestage tegelik kiirus:',tegelik=>{
        let trahv=(tegelik - lubatud) * 3
        trahv = Math.min(trahv,190)
        let lauseKeskosa = ' kiiruse uletamise eest on teie trahv '
        let tulemus = `${nimi},${lauseKeskosa} ${trahv} eurot.`
        console.log(tulemus)
        rl.close()
    })})
})
