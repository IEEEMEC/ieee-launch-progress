console.log('shit')
let button=document.getElementById('launch')
let bar=document.getElementById('bar')
let ar=[]
const printNumbersForEverySec = (n)=>{
    for (let i = 1; i <= n; i++) {
        setTimeout( () =>{
          ar.push(i)
        }, i * 30)
        
      }
  }
  
button.onclick=()=>{var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
xhr.open('get', '/file.html', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) { 
        bar.innerHTML = xhr.responseText;
    } 
}
xhr.send();
printNumbersForEverySec(100);
setTimeout(()=>{location.href="//codewithharry.com"},3000)
}