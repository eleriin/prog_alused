const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Mitu p6ialpoissi tahab 6unu: ",P6ialpoissideArv=>{
    let ounad=14
    for(let i=0; i<P6ialpoissideArv;i++){
let Tulemus=(Math.ceil(Math.random()*2))
ounad=ounad-Tulemus
console.log(Tulemus)
}
console.log(`Lumivalgekesele j2i: ${ounad}`)
    rl.close()
}
)