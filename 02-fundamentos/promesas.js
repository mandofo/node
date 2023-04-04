const empleados = [
    {
        id:1,
        nombre:'Armando'
    },
    {
        id:2,
        nombre:'Lupe'
    },
    {
        id:3,
        nombre:'Martha'
    }
];

const salarios = [
    {
        id:1,
        salario: 1500
    },
    {
        id:2,
        salario: 1000
    },
];

const getEmpleado = (id) => {
    const empleado = empleados.find( e=>e.id === id ) ?.nombre ;
    const promesa = new Promise( (resolve, reject)=>{
        (empleado) ?   resolve(empleado) :  reject(`El empleado con id ${id} no existe`);
    } );
    return promesa;
}

const getSalario = (id)=>{
    const salario = salarios.find(e=>e.id === id) ?.salario;
    return  new Promise( (resolve,reject) =>{ 
                    (salario) ? resolve(salario) : reject(`El salario con id ${id} no existe`);
                }  );
}



const id = 3;
/* 
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))
    
getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err))
 */
/* 
es funcional pero no limpio
    getEmpleado(id)
        .then( empleado => {
            getSalario(id)
                .then(salario => {
                    console.log('El empleado: ', empleado, ' tiene un salario de: ', salario );
                })
                .catch(err => console.log(err))
        } )
        .catch(err => console.log(err))
         */
let nombre;
getEmpleado(id)
        .then(empleado => { 
            nombre = empleado;
            return getSalario(id)
            } )
        .then( salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
        .catch( err => console.log(err))