

//form ANA//

let iconArrowLeft = document.getElementById("iconArrowLeft");
let iconArrowRight = document.getElementById("iconArrowRight")
let idSlider = document.getElementById("idSlider");
let boxBtn1 = document.getElementById("boxBtn1");
let boxBtn2 = document.getElementById("boxBtn2");
let boxBtn3 = document.getElementById("boxBtn3");
let boxBtn4 = document.getElementById("boxBtn4");




iconArrowLeft.addEventListener("click", function(){
    if(idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-1");
        idSlider.classList.remove("slider-view-2");
       
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-3");
    }
    else if (idSlider.classList.contains("slider-view-4")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-4");
    }
});

iconArrowRight.addEventListener("click", function(){
    if(idSlider.classList.contains("slider-view-1")) {
        idSlider.classList.add("slider-view-2");
        idSlider.classList.remove("slider-view-1");
        boxBtn1.classList.remove("btn-select");
        boxBtn2.classList.add("btn-select");
    }
    else if (idSlider.classList.contains("slider-view-2")) {
        idSlider.classList.add("slider-view-3");
        idSlider.classList.remove("slider-view-2");
    }
    else if (idSlider.classList.contains("slider-view-3")) {
        idSlider.classList.add("slider-view-4");
        idSlider.classList.remove("slider-view-3");
    }
});


let x = document.getElementById("x");
let anajs = document.getElementById("anajs");

x.addEventListener("click",function(){
    if (anajs.style.display === "none") {
         anajs.style.display = "block"
    } else{
        anajs.style.display = "none";
    } 
}

);
