window.addEventListener("load", function () {
    document.getElementById("boton").addEventListener("click", function () {
        var xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("contenedor").innerText = this.responseText
            }
        }
        xhr.open("GET", "action.php?nombre=Julio&apellido=Salinas", true)
        xhr.send()
    })
})