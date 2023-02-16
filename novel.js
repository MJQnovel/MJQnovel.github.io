var Ncap = parseInt(document.title.match(/(\d+)/g)); 

async function capitulo() { //lectura json de la novela

    const requestURL = 'novela.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const novela = await response.json();

    datosdisponible(novela);
    titulocabezal(novela);
}

function datosdisponible(myobj) { //imprime datos de la novela
    const myCapitulos = document.getElementById("capitulos");
    for (let i in myobj.capitulos) { 
        N = parseInt(i)+1;
        myCapitulos.innerHTML += '<a class="col-auto" href="Capitulo'+N+'.html">'+ myobj.capitulos[i].nombre  + "</a>";
    }; //imprime capitulos disponibles

    const myTituloCab = document.getElementById("titulo_novela_traducido_cab");
    myTituloCab.innerText = myobj.nombrenovelaES;                                   // imprime titulo novela en cabezal
    const myTituloInf = document.getElementById("titulo_novela_traducido_inf");
    myTituloInf.innerText = "Titulo traducido : " + myobj.nombrenovelaES;           // imprime titulo traducido novela en informacion
    const myTituloCorto = document.getElementById("titulo_novela_corto");
    myTituloCorto.innerText = "Titulo corto : " + myobj.nombrecorto;                // imprime titulo corto novela en inf
    const myTituloOrig = document.getElementById("titulo_novela_original");
    myTituloOrig.innerText = "Titulo original : " +myobj.nombreoroginal;            // imprime titulo original novela en inf

    const genero = document.getElementById("genero_novela");
    genero.innerText = "Genero : " + (myobj.generonovela); // imprime titulo novela en cabezal

    const resumenES = document.getElementById("resumenNovela");
    resumenES.innerText = (myobj.resumenES); // imprime titulo novela en cabezal

} 

capitulo();