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


const getInfoUsuario = async(id) => {
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return  `El salario del empledo: ${empleado} es de ${salario}`;
    }
    catch(e)
    {
        throw e;
    }

}

const id = 10;
getInfoUsuario(id)
        .then(msg => console.log(msg))
        .catch(err => console.log(err))