const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Sisestage ringide arv: ", RingideArv=>{
    let summa =0;
    for(let ring=1; ring<=RingideArv; ring++){
        if(ring % 2===0){summa+=ring;
}
}
    console.log(`Porgandite koguarv on ${summa}`);
    
        rl.close()
}

)