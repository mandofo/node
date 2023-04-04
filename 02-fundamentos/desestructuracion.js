const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    //edad: 50,
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} `
    }
};

//console.log( deadpool.getNombre()   );
/*
const nombre = deadpool.nombre;
const apellido = deadpool.apellido;
const poder = deadpool.poder;

console.log(nombre, apellido, poder);
*/
/*
const { nombre, apellido, poder } = deadpool;
console.log(nombre, apellido, poder);
*/
function imprimeHeroe({nombre, apellido, poder, edad = 0})
{
   // const { nombre, apellido, poder, edad = 0 } = heroe;
   nombre = 'Armando';
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1,h2,h3] = heroes;

//si solo quiero el tercero
//const [,,h3] = heroes;


console.log(h1, h2, h3);