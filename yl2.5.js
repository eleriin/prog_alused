const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisestage kirja suurus: ", kirjaSuurus=>{
rl.question("Sisestage kirja teema pealkiri: ", pealkiri=>{
rl.question("Kas kirjaga on kaasas fail: ", fail=>{
    if((pealkiri==="")||((fail==="jah")&& (kirjaSuurus>1)))
    console.log(`Kiri on sp2mm`);
    else{
    console.log(`Kiri ei ole sp2mm`)}
rl.close()
})
})
})