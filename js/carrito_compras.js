let cont = document.getElementById("imgboxx");
let imgUno = document.getElementById("imgMini1");
let imgDos = document.getElementById("imgMini2");
let imgTres = document.getElementById("imgMini3");
let imgCuatro = document.getElementById("imgMini4");
let boxImgMini1 = document.getElementById("BoxImgMini1")
let boxImgMini2 = document.getElementById("BoxImgMini2")
let boxImgMini3 = document.getElementById("BoxImgMini3")
let boxImgMini4 = document.getElementById("BoxImgMini4")

let imgUnoModal = document.getElementById("imgMini1.0");
let imgUnoModa2 = document.getElementById("imgMini2.0");
let imgUnoModa3 = document.getElementById("imgMini3.0");
let imgUnoModa4 = document.getElementById("imgMini4.0");
let ImgMini1 = document.getElementById("BoxImgMini1.0")
let ImgMini2 = document.getElementById("BoxImgMini2.0")
let ImgMini3 = document.getElementById("BoxImgMini3.0")
let ImgMini4 = document.getElementById("BoxImgMini4.0")

let imgboxx = document.getElementById("imgbox")

cont.addEventListener("click", function () {
    lightbox.classList.remove("ligth-hidden")
})

imgUnoModal.addEventListener("click", function () {
    console.log("imgUno " + imgUno)
    imgboxx.setAttribute("src", "img/image-product-1.jpg")
    imgUnoModal.classList.add("box-img-mini")
    imgUnoModa2.classList.remove("box-img-mini")
    imgUnoModa3.classList.remove("box-img-mini")
    imgUnoModa4.classList.remove("box-img-mini")
    ImgMini1.classList.add("img-mini-a")
    ImgMini2.classList.remove("img-mini-a")
    ImgMini3.classList.remove("img-mini-a")
    ImgMini4.classList.remove("img-mini-a")

    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.add("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")

})
imgUno.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-1.jpg")
    boxImgMini1.classList.add("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.add("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")

    // imgCuatro.classList.remove("img-mini-a")
    // boxImgMini1.classList.add("box-img-mini")
    // boxImgMini2.classList.remove("box-img-mini")
    // boxImgMini3.classList.remove("box-img-mini")
    // boxImgMini4.classList.remove("box-img-mini")
    // imgUno.classList.add("img-mini-a")
    // imgDos.classList.remove("img-mini-a")
    // imgTres.classList.remove("img-mini-a")
    // imgCuatro.classList.remove("img-mini-a")
})


imgDos.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-2.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.add("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})

imgUnoModa2.addEventListener("click", function () {
    console.log("imgUno " + imgUno)
    imgboxx.setAttribute("src", "img/image-product-2.jpg")
    imgUnoModal.classList.remove("box-img-mini")
    imgUnoModa2.classList.add("box-img-mini")
    imgUnoModa3.classList.remove("box-img-mini")
    imgUnoModa4.classList.remove("box-img-mini")
    ImgMini1.classList.remove("img-mini-a")
    ImgMini2.classList.add("img-mini-a")
    ImgMini3.classList.remove("img-mini-a")
    ImgMini4.classList.remove("img-mini-a")

    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.add("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.add("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")

})



imgTres.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-3.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.add("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")
})
imgUnoModa3.addEventListener("click", function () {
    console.log("imgUno " + imgUno)
    imgboxx.setAttribute("src", "img/image-product-3.jpg")
    imgUnoModal.classList.remove("box-img-mini")
    imgUnoModa2.classList.remove("box-img-mini")
    imgUnoModa3.classList.add("box-img-mini")
    imgUnoModa4.classList.remove("box-img-mini")
    ImgMini1.classList.remove("img-mini-a")
    ImgMini2.classList.remove("img-mini-a")
    ImgMini3.classList.add("img-mini-a")
    ImgMini4.classList.remove("img-mini-a")

    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.add("box-img-mini")
    boxImgMini4.classList.remove("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.add("img-mini-a")
    imgCuatro.classList.remove("img-mini-a")

})


imgCuatro.addEventListener("click", function () {
    cont.setAttribute("src", "img/image-product-4.jpg")
    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.add("img-mini-a")
})
imgUnoModa4.addEventListener("click", function () {
    console.log("imgUno " + imgUno)
    imgboxx.setAttribute("src", "img/image-product-4.jpg")
    imgUnoModal.classList.remove("box-img-mini")
    imgUnoModa2.classList.remove("box-img-mini")
    imgUnoModa3.classList.remove("box-img-mini")
    imgUnoModa4.classList.add("box-img-mini")
    ImgMini1.classList.remove("img-mini-a")
    ImgMini2.classList.remove("img-mini-a")
    ImgMini3.classList.remove("img-mini-a")
    ImgMini4.classList.add("img-mini-a")

    boxImgMini1.classList.remove("box-img-mini")
    boxImgMini2.classList.remove("box-img-mini")
    boxImgMini3.classList.remove("box-img-mini")
    boxImgMini4.classList.add("box-img-mini")
    imgUno.classList.remove("img-mini-a")
    imgDos.classList.remove("img-mini-a")
    imgTres.classList.remove("img-mini-a")
    imgCuatro.classList.add("img-mini-a")

})

let btnRestar = document.getElementById("btnRestar");
let cantBox = document.getElementById("cantBox");
let numeroElementos = document.getElementById("numeroElementos");
let btnCantidad = document.getElementById("btnCantidad");
let btnSumar = document.getElementById("btnSumar");
// btnSumar.addEventListener("click" , function(){
//    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
//    // leemos el numero de la interfaz
//    // convertimos el numero leido en texto leido
//    // añadimos uno al valor total
//    // convertimos el resultado de las operaciones a texto
//    // agreagamos el nuevo valor*/

//    let nodeToAdd = document.createElement("p");

//    let nodeText  = document.createTextNode("6");

//    numeroElementos.innerHTML="";
//    let numeroElementosInt = parseInt(numeroElementosTxt);
//    let totalElementosInt = numeroElementosInt + 1;
//    let totalElementosTxt = totalElementosInt.toString();
//    numeroElementos.innerHTML = totalElementosTxt;  
// });
// btnRestar.addEventListener("click" , function(){
//     let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
//     // leemos el numero de la interfaz
//     // convertimos el numero leido en texto leido
//     // añadimos uno al valor total
//     // convertimos el resultado de las operaciones a texto
//     // agreagamos el nuevo valor*/

//     let nodeToAdd = document.createElement("p");

//     let nodeText  = document.createTextNode("6");

//     numeroElementos.innerHTML="";
//     let numeroElementosInt = parseInt(numeroElementosTxt);
//     let totalElementosInt = numeroElementosInt - 1;
//     let totalElementosTxt = totalElementosInt.toString();
//     numeroElementos.innerHTML = totalElementosTxt;  
//  });

let valorUnitario = 190000;
let valorUnitarioTxt = valorUnitario.toString();

let valorUnitarioPeso = new Intl.NumberFormat().format(valorUnitario);

let cantNumtotal = valorUnitarioTxt.length


let valorTotal = document.getElementById("valorTotal");
let valorTotalInt = 0;





let click = 0;

btnSumar.addEventListener("click", function () {
    // nodeToAdd.appendChild(nodeText);

    // btnCantidad.appendChild(nodeToAdd);
    let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;

    let numeroElementosInt = parseInt(numeroElementosTxt);
    let totalElementosInt = numeroElementosInt + 1;
    let totalElementostxt = totalElementosInt.toString();
    numeroElementos.innerHTML = totalElementostxt;

    valorTotalInt = valorUnitario * totalElementosInt;
    valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);

});
btnRestar.addEventListener("click", function () {

    if (numeroElementos.innerHTML > 0) {
        let numeroElementosTxt = document.getElementById("numeroElementos").innerHTML;
        let numeroElementosInt = parseInt(numeroElementosTxt);
        let totalElementosInt = numeroElementosInt - 1;
        let totalElementostxt = totalElementosInt.toString();
        numeroElementos.innerHTML = totalElementostxt;
        valorTotalInt = valorUnitario * totalElementosInt;
        valorTotal.innerHTML = "$" + new Intl.NumberFormat().format(valorTotalInt);
    };
});

let lightbox = document.getElementById("lightbox");
let btnX = document.getElementById("btnX");

btnX.addEventListener("click", function () {
    lightbox.classList.add("ligth-hidden");

})

let left = 0;
let right = 0;
let btnL = document.getElementById("btnL");
btnL.addEventListener("click", function () {
    left = left + 1;
    if (left == 1) {
        imgboxx.setAttribute("src", "img/image-product-4.jpg")
        imgUnoModal.classList.remove("box-img-mini")
        imgUnoModa2.classList.remove("box-img-mini")
        imgUnoModa3.classList.remove("box-img-mini")
        imgUnoModa4.classList.add("box-img-mini")
        ImgMini1.classList.remove("img-mini-a")
        ImgMini2.classList.remove("img-mini-a")
        ImgMini3.classList.remove("img-mini-a")
        ImgMini4.classList.add("img-mini-a")
        right = left
        console.log("right " + right)
        console.log("left " + left)
    }

    if (left == 2) {
        imgboxx.setAttribute("src", "img/image-product-3.jpg")
        imgUnoModal.classList.remove("box-img-mini")
        imgUnoModa2.classList.remove("box-img-mini")
        imgUnoModa3.classList.add("box-img-mini")
        imgUnoModa4.classList.remove("box-img-mini")
        ImgMini1.classList.remove("img-mini-a")
        ImgMini2.classList.remove("img-mini-a")
        ImgMini3.classList.add("img-mini-a")
        ImgMini4.classList.remove("img-mini-a")
        right = left
    }

    if (left == 3) {
        imgboxx.setAttribute("src", "img/image-product-2.jpg")
        imgUnoModal.classList.remove("box-img-mini")
        imgUnoModa2.classList.add("box-img-mini")
        imgUnoModa3.classList.remove("box-img-mini")
        imgUnoModa4.classList.remove("box-img-mini")
        ImgMini1.classList.remove("img-mini-a")
        ImgMini2.classList.add("img-mini-a")
        ImgMini3.classList.remove("img-mini-a")
        ImgMini4.classList.remove("img-mini-a")
        right = left
    }

    if (left == 4) {
        imgboxx.setAttribute("src", "img/image-product-1.jpg")
        imgUnoModal.classList.add("box-img-mini")
        imgUnoModa2.classList.remove("box-img-mini")
        imgUnoModa3.classList.remove("box-img-mini")
        imgUnoModa4.classList.remove("box-img-mini")
        ImgMini1.classList.add("img-mini-a")
        ImgMini2.classList.remove("img-mini-a")
        ImgMini3.classList.remove("img-mini-a")
        ImgMini4.classList.remove("img-mini-a")
        right = left
        left = 0;
    }

})


let btnR = document.getElementById("btnR")
btnR.addEventListener("click", function () {
    right = right + 1;
    if (right == 1) {
        imgboxx.setAttribute("src", "img/image-product-1.jpg")
        imgUnoModal.classList.add("box-img-mini")
        imgUnoModa2.classList.remove("box-img-mini")
        imgUnoModa3.classList.remove("box-img-mini")
        imgUnoModa4.classList.remove("box-img-mini")
        ImgMini1.classList.add("img-mini-a")
        ImgMini2.classList.remove("img-mini-a")
        ImgMini3.classList.remove("img-mini-a")
        ImgMini4.classList.remove("img-mini-a")
    }

    if (right == 2) {
        imgboxx.setAttribute("src", "img/image-product-2.jpg")
        imgUnoModal.classList.remove("box-img-mini")
        imgUnoModa2.classList.add("box-img-mini")
        imgUnoModa3.classList.remove("box-img-mini")
        imgUnoModa4.classList.remove("box-img-mini")
        ImgMini1.classList.remove("img-mini-a")
        ImgMini2.classList.add("img-mini-a")
        ImgMini3.classList.remove("img-mini-a")
        ImgMini4.classList.remove("img-mini-a")
    }

    if (right == 3) {
        imgboxx.setAttribute("src", "img/image-product-3.jpg")
        imgUnoModal.classList.remove("box-img-mini")
        imgUnoModa2.classList.remove("box-img-mini")
        imgUnoModa3.classList.add("box-img-mini")
        imgUnoModa4.classList.remove("box-img-mini")
        ImgMini1.classList.remove("img-mini-a")
        ImgMini2.classList.remove("img-mini-a")
        ImgMini3.classList.add("img-mini-a")
        ImgMini4.classList.remove("img-mini-a")
    }

    if (right == 4) {
        imgboxx.setAttribute("src", "img/image-product-4.jpg")
        imgUnoModal.classList.remove("box-img-mini")
        imgUnoModa2.classList.remove("box-img-mini")
        imgUnoModa3.classList.remove("box-img-mini")
        imgUnoModa4.classList.add("box-img-mini")
        ImgMini1.classList.remove("img-mini-a")
        ImgMini2.classList.remove("img-mini-a")
        ImgMini3.classList.remove("img-mini-a")
        ImgMini4.classList.add("img-mini-a")
        right = 0;
    }
})