
window.addEventListener("load", function(){
    let xmlDoc = new XMLHttpRequest();

    xmlDoc.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let respuesta = this.responseXML;

            let marca = respuesta.getElementsByTagName("marca")[0].childNodes[0].nodeValue;

            for(let i=0; i< respuesta.getElementsByTagName("marca").length; i++){
                marca = respuesta.getElementsByTagName("marca")[i].childNodes[0].nodeValue;
                document.getElementById("coche"+(i+1)).innerHTML = marca;
                console.log(i+" "+marca);
            }
            
            

        }

    }

    xmlDoc.open("GET", "coches.xml", true);
    xmlDoc.send();

});