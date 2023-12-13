window.addEventListener("load", function () {
    document.getElementById("boton").addEventListener("click", function () {
        let xhr = new XMLHttpRequest();
        xhr.onload = procesarRespuesta;
        xhr.open('GET', 'provincias.json', true)
        xhr.overrideMimeType('text/plain');
        xhr.send();
        function procesarRespuesta() {
            let respuesta = JSON.parse(xhr.responseText);
            let lista = document.createElement('ul');
            for (var i = 0; i < respuesta.provincias.length; i++) {
                var item = procesarElemento(respuesta.provincias[i]);
                lista.appendChild(item);
            }
            document.body.appendChild(lista);
        }
        function procesarElemento(provincia) {
            let item = document.createElement('li');
            item.textContent = provincia.nombre + ' (CP ' + provincia.cp + ')';
            return item;
        }
    });
});