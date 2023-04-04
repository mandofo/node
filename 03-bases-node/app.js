const fs = require('fs');
//5x1 = 5
console.clear();
console.log('======================================')
console.log('           TABLA DEL 5')
console.log('======================================')
const tabla5 = () =>{
    const base = 3;
    let salida = '';
    for(let i = 1; i <= 10; i++ )
    {
        salida += `${base} x ${i} = ${i*base}\n`;
    }
    fs.writeFile(`tabla-${base}.txt`, salida,  (err)=>{
        if(err) throw err;
    })
    console.log(salida);
}

tabla5();