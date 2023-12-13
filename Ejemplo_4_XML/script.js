window.addEventListener("load", function () {
    
    document.getElementById("boton").addEventListener("click", function () {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onload = procesarRespuesta;
        httpRequest.open('GET', 'provincias.xml', true);
        httpRequest.send(null);
        function procesarRespuesta() {
            let elementoRaiz = httpRequest.responseXML.documentElement;
            let elementos = elementoRaiz.childNodes;
            let lista = document.createElement('ul');
            for (let i = 0; i < elementos.length; i++) {
                if (elementos[i].nodeType == Node.ELEMENT_NODE) {
                    let item = procesarElemento(elementos[i]);
                    lista.appendChild(item);
                }
            }
            document.body.appendChild(lista);
        }
        function procesarElemento(elemento) {
            let codigoPostal = elemento.getAttribute('cp');
            let provincia = elemento.textContent;
            let item = document.createElement('li');
            item.textContent = provincia + ' (CP ' + codigoPostal + ')';
            return item;
        }
    });
});