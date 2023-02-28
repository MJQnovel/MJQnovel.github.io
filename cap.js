
function d(y) {             //capta datos
    var m = (y.split("/"))
    var n = m.length-2
    var ncap =parseInt(m[n]); // numero de capitulo
    var nombrenovela = m[n-3].match(/.{1,2}/g).map(function(v){return String.fromCharCode(parseInt(v, 16));}).join('');
    
    const myTituloCab = document.getElementById("demo");

    const title = document.getElementById("title")
    title.innerText = "MJQ Novel | "+nombrenovela+" "+ncap;
    /*google analytics*/window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-5NW6PLXY9Y');
    urldirectorio="/"+m[n-3]+"/"
    urljson = urldirectorio+"6e6f76656c61.json"

    capitulo(urljson);

async function capitulo(url) {              //entrada datos json
    const response = await fetch(url);
    const novela = await response.json();
    capituloHeader(novela);
    Texto(novela) //Borrar
};
function capituloHeader(myobj) {            //Barra paso capitulo 
    const urlTcap = document.getElementsByClassName("Tcap")
    urlTcap[0].setAttribute("href",urldirectorio);
    urlTcap[1].setAttribute("href",urldirectorio);//imprime enlace Tcapitulos

    const urlCprev = document.getElementsByClassName("Cprev")
    urlCprev[0].setAttribute("href",(urldirectorio+m[n-2]+"/"+m[n-1]+"/"+(ncap-1)+"/"));
    urlCprev[1].setAttribute("href",(urldirectorio+m[n-2]+"/"+m[n-1]+"/"+(ncap-1)+"/"));
    if (!Boolean(myobj.capitulos[ncap-1].texto)) {
        urlCprev[0].setAttribute("class","col-4 Cprev d-none");
        urlCprev[1].setAttribute("class","col-4 Cprev d-none");
    }; //quita cap.prev en caso de ser el primero
    
    const urlCnext = document.getElementsByClassName("Cnext");
    urlCnext[0].setAttribute("href",(urldirectorio+m[n-2]+"/"+m[n-1]+"/"+(ncap+1)+"/"));
    urlCnext[1].setAttribute("href",(urldirectorio+m[n-2]+"/"+m[n-1]+"/"+(ncap+1)+"/"));
    if (!Boolean(myobj.capitulos[ncap+1].texto)) {
        urlCnext[0].setAttribute("class","col-4 Cnext d-none");
        urlCnext[1].setAttribute("class","col-4 Cnext d-none");
    }; //quita cap.next en caso de ser el primero
}; 
async function Texto(objnovela) {
    const URLmyText = objnovela.capitulos[ncap].texto;
    const response = await fetch(URLmyText);
    const myObjText = await response.json(); // objeto funcional

    imprecionnovela(myObjText);
};
function imprecionnovela(myObj){
    document.getElementById("linea_url").innerHTML +='<i id="titulo_novela">'+myObj[ncap].nombreC_ES+": "+myObj[ncap].nombreL_ES+'</i>'; //Titulo capitulo en linea url
    var lineas = myObj[ncap].textoES.split("#");                  //cuerpo novela
    for(var linea of lineas) {
        document.getElementById("cuerpo_novela").innerHTML += "<p>"+""+linea+"</p>";
    }; 
};

}