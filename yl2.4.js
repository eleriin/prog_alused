const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
    
rl.question('Kas soovite istekoha ise valida või lasta loosida? (ise/loos): ', valik => {
  if (valik === 'ise') {
    rl.question('Kas soovite istuda akna ääres või mujal? (aken/muu): ', valikKoht => {
      let istekoht;
      if (valikKoht === 'aken') {
        istekoht = 'aknakoht';
      } else if (valikKoht === 'muu') {
        istekoht = 'vahekaigukoht';
      
      }
      console.log(`Valisite ise. Teie istekoht on: ${istekoht}.`);
      rl.close();
    });
  } else if (valik === 'loos') {
    const istekoht = Math.random() <= 1 / 3 ? 'aknakoht' : 'vahekäigukoht';
    console.log(`Teie loositud istekoht on: ${istekoht}.`);
    rl.close();
  } 
});