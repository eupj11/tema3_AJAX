window.addEventListener("load", function () {
    document.getElementById("boton").addEventListener("click", function () {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("contenedor").innerHTML = this.responseText
            }
        }
        xhr.open("GET", "mensaje.txt", true)
        xhr.send()
    })
})