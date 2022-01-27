
let button=document.getElementById('launch')
let bar=document.getElementById('bar')

  
button.onclick=()=>{
        bar.innerHTML = '<div class="progress"><div class="progress__bar"></div></div>';
setTimeout(()=>{location.href="https://www.ieeemec.org"},3000)
}