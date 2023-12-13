


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === 4 && xhr.status === 200) {
        let datos = JSON.parse(xhr.responseText);
        console.log(datos);
        datos.forEach(element => {
            console.log(element.name);
            //document.getElementById('nombre').innerHTML = element.name;
            //let p=document.createElement('p').innerHTML = element.name;
            //document.getElementById('nombre').appendChild(p);
        }
        )
    }
});

