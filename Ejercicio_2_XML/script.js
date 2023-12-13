window.addEventListener("load", function(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let xmlDoc = this.responseXML;

            document.getElementById("de").innerHTML = xmlDoc.getElementsByTagName("de")[0].childNodes[0].nodeValue;
            document.getElementById("a").innerHTML = xmlDoc.getElementsByTagName("a")[0].childNodes[0].nodeValue;
            document.getElementById("asunto").innerHTML = xmlDoc.getElementsByTagName("encabezado")[0].childNodes[0].nodeValue;
            document.getElementById("mensaje").innerHTML = xmlDoc.getElementsByTagName("mensaje")[0].childNodes[0].nodeValue;

            
        }
    }
    xmlhttp.open("GET", "email.xml", true);
    xmlhttp.send();
})