window.addEventListener("load", function () {
    document.getElementById("boton").addEventListener("click", function () {
        var xhr = new XMLHttpRequest();
        xhr.onload = procesarRespuesta;
        xhr.open("GET", "provincias.html", true);
        xhr.overrideMimeType('text/html');
        xhr.send();
        function procesarRespuesta() {
            let respuesta = xhr.responseText;
            let contenedor = document.createElement('div');
            contenedor.innerHTML = respuesta;
            document.body.appendChild(contenedor);
        }
    });
});