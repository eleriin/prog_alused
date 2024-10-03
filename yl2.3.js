const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Sisestage enda vanus: ", vanus=>{
rl.question("Sisestage enda sugu (M,m v6i N,n): ", sugu=>{
rl.question("Sisestage treeningu tyyp (1,2,3): ", tyyp=>{
    let Pulss 
    let maxPulss
    let minPulss
    if(sugu=="M"||sugu=="m")
        {Pulss=220-vanus} 
    else if (sugu=="N" || sugu=="n")
        {Pulss=206-(0.88 *vanus)}
    if (tyyp==1){
        minPulss=Pulss*0.5
        maxPulss=Pulss*0.7
    }
    else if (tyyp==2){
        minPulss=Pulss*0.7
        maxPulss = Pulss*0.8
    }
    else if (tyyp==3){
        minPulss=Pulss*0.8
        maxPulss = Pulss*0.87
    }
    console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(minPulss)} kuni ${Math.round(maxPulss)}`)
rl.close()
})
})
})