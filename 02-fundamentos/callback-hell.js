const id = 3;

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

    const getEmpleado = (id, callback) => {
        const empleado = empleados.find( e=>e.id === id ) ?.nombre ;
        if(empleado)
        {
            callback(null, empleado);
        }
        else
        {
            callback(`Empleado con id ${ id} no existe`)
        }
    }
    //console.log( getEmpleado(5) );

    const getSalario = (id, callback)=>{
        const salario = salarios.find( e=>e.id === id)?.salario
        if(salario)
        {
            callback(null, salario);
        }
        else
        {
            callback(`No existe el salario con id ${id} no existe`);
        }
    };

    getEmpleado(id, ( err, empleado)=>{
        if(err)
        {
            return console.log(err)
        }
        
        console.log('Empleado existe!')
        console.log(empleado);

        getSalario(id, (error, salario) => {
            if(error)
            {
                return console.log(error);
            }
            console.log('El empleado: ', empleado, 'tiene un salario de: ', salario);
    
        });

        
    });



