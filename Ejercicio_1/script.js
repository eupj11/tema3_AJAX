//Objetivo: Realizar una petición AJAX a un archivo HTML y mostrar su contenido en el DOM.
//Opción 1
window.addEventListener("load", ()=>{
    let pulsado = true;
    document.getElementById("boton").addEventListener("click", ()=>{
        if(pulsado){
            pulsado = false;
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState == 4 && xhr.status == 200){
                let contenido = document.createElement("div");
                contenido.innerHTML = xhr.responseText;
                document.body.appendChild(contenido);
            }
        }
        xhr.open("GET", 'alumnos.html', true);
        xhr.overrideMimeType('text/html; charset-utf-8');
        xhr.send();
    }//End if
    })
})


//Opción 2
/* window.addEventListener("load", function () {
    let boton = document.getElementById("boton")
    boton.addEventListener("click", cargarDatos)
     
    let httpRequest;
     
    function cargarDatos() {
        httpRequest = new XMLHttpRequest();
        httpRequest.onload = procesarRespuesta;
         
        httpRequest.open('GET', 'alumnos.html', true);
        httpRequest.overrideMimeType('text/html');
        httpRequest.send();
    }
     
    function procesarRespuesta() {
        var respuesta = httpRequest.responseText;
        var contenido = document.createElement('div');
        contenido.innerHTML = respuesta;
        document.body.appendChild(contenido);
    }
}); */



//Opción 3
/* window.addEventListener("load", function () {

    let boton = document.getElementById("boton")
    boton.addEventListener("click", cargarDatos)
     
    let httpRequest;
     
    function cargarDatos() {
        httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange = procesarRespuesta;
         
        httpRequest.open('GET', 'alumnos.html', true);
        httpRequest.overrideMimeType('text/html');
        httpRequest.send();
    }
    function procesarRespuesta() {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var respuesta = httpRequest.responseText;
            var contenido = document.createElement('div');
            contenido.innerHTML = respuesta;
            document.body.appendChild(contenido);
        }
    }
    }); */