let btnRestar = document.getElementById("btnRestar");
let cantBox = document.getElementById("cantBox");
let btnSumar = document.getElementById("btnSumar");
let btnCantidad = document.getElementById("btnCantidad");
let numeroElementos = document.getElementById("numeroElementos");


btnSumar.addEventListener("click",function() {
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
    
    let numeroElementosInt = parseInt(numeroElementosTxt);
    
    let totalElementosInt = numeroElementosInt + 1;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;
    
    
});


