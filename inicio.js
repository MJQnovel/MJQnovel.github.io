// var Ncap = parseInt(document.title.match(/(\d+)/g)); 
ultimasnovelas();

async function ultimasnovelas() { //lectura json de la novela
    const requestURL = 'ultimas_novelas.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const myNewNovel = await response.json();

    cargaopciones(myNewNovel);
    document.getElementById("demo").innerText = "comunicion funciona, variable = "+window.dataLayer || [];
};

function cargaopciones(myobj) { //imprime datos de la novela
    const myCapitulos = document.getElementsByClassName("IntroNewNovel");
    const NumeroNuevasNovelas = 3;
    for (let i = 0; i < NumeroNuevasNovelas; i++) {
        myCapitulos[0].innerHTML +=
            '<a href="'+myobj.novelas_new[i].urlnovela +'" class="col-2 border nav-link m-1 rounded">'+
                '<img class="img-fluid rounded border border-3"  src="'+myobj.novelas_new[i].urlimg+'">'+
                '<h5>'+myobj.novelas_new[i].nombre+'</h5>'
            +'</a>'; 
        if (i==(NumeroNuevasNovelas-1)) {
            break;
        }
    }
    
}