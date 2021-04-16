document.addEventListener("DOMContentLoaded", function(event){

    const formularioContactos = document.querySelector('#contacto');
    const notificaciones = document.querySelector('#notificacion');



    evento();
function evento() {
    formularioContactos.addEventListener('submit', leerFormulario);
}


function leerFormulario(e) {
    e.preventDefault(); 
  
    const nombre = document.querySelector('#nombre').value;

        if(nombre === ''){
            mostrarNotificacion('Todos los Campos son Obligatorios', 'error');
        }else{
            const infoContacto = new FormData(); 
            infoContacto.append('nombre', nombre);

            insertarBD(infoContacto);


        }
        
}





function insertarBD(datos){

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'includes/funciones/model.php', true);

    xhr.onload = function(){
        if(this.status === 200){
           const respuesta =JSON.parse( xhr.responseText);

           console.log(respuesta);
            mostrarNotificacion('Registro exitoso', 'correcto');

        
        }
    }
    xhr.send(datos);
}

function mostrarNotificacion(mensaje, clase){
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;
    notificaciones.insertBefore(notificacion, document.querySelector('#notificacion legend'));

    setTimeout(() => {
        notificacion.classList.add('visible');

            setTimeout(() =>{
                notificacion.classList.remove('visible');

                setTimeout(() => {
                    notificacion.remove();
                }, 500);
            }, 3000);
    }, 100);
    
}



});