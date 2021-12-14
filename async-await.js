const empleados = [
    {
        id: 1,
        nombre: 'Alex'
    },
    {
        id: 2,
        nombre: 'Matias'
    },
    {
        id: 3,
        nombre: 'Reineck'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];

const getEmpleado = ( id ) => {
    
    return new Promise((resolve, reject) => {
        
        const empleado = empleados.find( e => e.id === id )?.nombre;
        
        ( empleado )
            ? resolve(empleado) 
            : reject(`No existe empleado con id ${id}`);

    });

}

const getSalario = ( id ) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find( x => x.id === id)?.salario;

        ( salario )
            ? resolve(salario)
            : reject(`No existe salario para el id: ${id}`);

    })

}

const getInfoUsuario = async() =>{

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
    
        return `El empleado ${empleado} tiene un salario de: ${salario}`;
    } catch(err) {
        throw err;
    }

}

const id = 3;

getInfoUsuario(id)
    .then( msg => console.log(msg))
    .catch( err => console.log(err));


