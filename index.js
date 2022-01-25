
let button=document.getElementById('launch')
let bar=document.getElementById('bar')

  
button.onclick=()=>{var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', '/file.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        bar.innerHTML = xhr.responseText;
    } 
}
xhr.send();
setTimeout(()=>{location.href="//codewithharry.com"},3000)
}