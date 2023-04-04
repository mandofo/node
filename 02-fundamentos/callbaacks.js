/* setTimeout(() => {
    console.log('Hola Mundo');
}, 3000);

 */

const getUsuarioById = (id, callback) => {

    const usuario = {
                    //id:id,
                    id,
                    nombre:'Armando'
                }
    
    setTimeout( ()=>{
        //console.log(usuario)
        callback(usuario);
    }, 1500);
}

getUsuarioById(10, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre);
});