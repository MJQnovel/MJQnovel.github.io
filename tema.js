var tema = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (tema == true){
    document.getElementById("html").setAttribute("data-bs-theme","dark");
    tema = true;       
} else {
    document.getElementById("html").setAttribute("data-bs-theme","light");
    tema = false;        
}
//document.getElementById("oscuridad").onclick = function (){
function modotema() {
    document.getElementById("demo").innerHTML += "tema = "+ tema;
    if (tema == false){
        document.getElementById("html").setAttribute("data-bs-theme","dark");
        tema = true;       
    } else {
        document.getElementById("html").setAttribute("data-bs-theme","light");
        tema = false;        
    }
}