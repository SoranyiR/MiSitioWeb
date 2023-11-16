let estrella1 = document.getElementById("estrella1");
let estrella2 = document.getElementById("estrella2");
let estrella3 = document.getElementById("estrella3");
let estrella4 = document.getElementById("estrella4");
let estrella5 = document.getElementById("estrella5");
let grafica = document.getElementById("grafica");


grafica.addEventListener("click", () => {
    let numero = document.getElementById("numero").value;
    if (numero >= 0 && numero <= 0.2) {
        estrella1.setAttribute("class", "fa-regular fa-star");
        estrella2.setAttribute("class", "fa-regular fa-star");
        estrella3.setAttribute("class", "fa-regular fa-star");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
        
    }
    else if (numero >= 0.3 && numero <= 0.7) {
        estrella1.setAttribute("class", "fa-solid fa-star-half");
        estrella2.setAttribute("class", "fa-regular fa-star");
        estrella3.setAttribute("class", "fa-regular fa-star");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
    }
    else if (numero >= 0.8 && numero <= 1.2) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-regular fa-star");
        estrella3.setAttribute("class", "fa-regular fa-star");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
    }
    else if (numero >= 1.3 && numero <= 1.7) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star-half");
        estrella3.setAttribute("class", "fa-regular fa-star");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
    }
    else if (numero >= 1.8 && numero <= 2.2) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-regular fa-star");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
    }
    else if (numero >= 2.3 && numero <= 2.7) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-solid fa-star-half");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
    }
    else if (numero >= 2.8 && numero <= 3.2) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-solid fa-star");
        estrella4.setAttribute("class", "fa-regular fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");
    }
    else if (numero >= 3.3 && numero <= 3.7) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-solid fa-star");
        estrella4.setAttribute("class", "fa-solid fa-star-half");
        estrella5.setAttribute("class", "fa-regular fa-star");

    }
    else if (numero >= 3.8 && numero <= 4.2) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-solid fa-star");
        estrella4.setAttribute("class", "fa-solid fa-star");
        estrella5.setAttribute("class", "fa-regular fa-star");

    }
    else if (numero >= 4.3 && numero <= 4.7) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-solid fa-star");
        estrella4.setAttribute("class", "fa-solid fa-star");
        estrella5.setAttribute("class", "fa-solid fa-star-half");

    }
    else if (numero >= 4.8 && numero <= 5) {
        estrella1.setAttribute("class", "fa-solid fa-star");
        estrella2.setAttribute("class", "fa-solid fa-star");
        estrella3.setAttribute("class", "fa-solid fa-star");
        estrella4.setAttribute("class", "fa-solid fa-star");
        estrella5.setAttribute("class", "fa-solid fa-star");
    }
    else {
        alert("porfavor ingrese un numero del 1 al 5");
    }

});
