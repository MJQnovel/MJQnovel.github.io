
var Ncap = parseInt(document.title.match(/(\d+)/g));    // numero de capitulo
let Cnext = Ncap+1;
let Cprev = Ncap-1;
var Tcapitulo = "capitulo"+Ncap+".txt"                  //datos para cuerpo del capitulo

capitulo("novela.json");                                // url json informacion novela
Texto(Tcapitulo);


//document.getElementById("demo").innerHTML = "comunicion funciona, variable = "+myobj.nombrenovelaEN.replace(/ /g,"");

async function capitulo(url) {              //entrada datos json
    const response = await fetch(url);
    const novela = await response.json();
    capituloHeader(novela);

    Textotest(novela) //Borrar
};
function capituloHeader(myobj) {            //Barra paso capitulo 
    const myTitulo = document.getElementById("section");
    myTitulo.innerHTML = "<h4>"+myobj.capitulos[Ncap-1].nombreL+"</h4>"; //imprime titulo
    document.getElementById("Tcap").setAttribute("href","/"+myobj.nombrenovelaEN.replace(/ /g,"")+"/Novela.html");   //imprime enlace Tcapitulos
    document.getElementById("Cprev").setAttribute("href","Capitulo"+Cprev+".html");
    if (Cprev==0) {document.getElementById("Cprev").setAttribute("class","d-none");};                                //quita cap.prev en caso de ser el primero
    document.getElementById("Cnext").setAttribute("href","Capitulo"+Cnext+".html");
    if (Cnext != myobj.capitulos[Ncap].capitulo) {document.getElementById("Cnext").setAttribute("class","d-none");}; //quita cap.next en caso de ser el primero
}; 
async function Texto(texto) {
        let myObject = await fetch(texto);
        let myText = await myObject.text();
        
        var lineas = myText.split("#");
        for(var linea of lineas) {
            document.getElementById("header").innerHTML += "<p>"+ linea + "</p>";
        }}
async function Textotest(objnovela) {
    const URLmyText = objnovela.capitulos[Ncap].textoES;
    const response = await fetch(URLmyText);
    
    const myObjText = await response.json();

        let myObject = await fetch(objnovela);
        let myText = await myObject.text();
        

        var lineas = myText.split("#");
        for(var linea of lineas) {
            document.getElementById("demo").innerHTML +=  "<p>Comunicion funciona, variable = </p>";
        }
        //document.getElementById("demo2").innerHTML = "Comunicion 2 funciona, variable 2 = "+myObjText[1].textoES;
        document.getElementById("demo2").innerHTML += "<p> Comunicion 2 funciona, variable = "+Ncap+"</p>";
      }

