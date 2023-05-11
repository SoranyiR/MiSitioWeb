let leftArrow = document.getElementById("leftArrow");
// let imgcanada = document.getElementById("imgcanada")

let rightRow = document.getElementById("rightRow");

// imgcanada.addEventListener("click", function () {
//     imgcanada.classList.add("canada-camry");
//     // imgcanada.classList.add("canada-camry-hidden");
// });
// rightRow.addEventListener("click", function () {
//     imgcanada.classList.remove("canada-camry");
//     // imgcanada.classList.add("canada-camry-hidden");
// });

//--------------------------------------------------------//


// let imgcanada2 = document.getElementById("imgcanada2")

// imgcanada2.addEventListener("click", function () {
//     imgcanada2.classList.add("canada-camry");
//     // imgcanada.classList.add("canada-camry-hidden");
// });
// rightRow.addEventListener("click", function () {
//     imgcanada2.classList.remove("canada-camry");
//     // imgcanada.classList.add("canada-camry-hidden");
// });

let row = document.querySelectorAll(".row");
let img = document.querySelectorAll(".img");
let cont = 0;
let contT = 1
// for (let i = 0; i <= contT; i++) {
//     cont = cont +1;
//     contT = contT +1;
//     console.log("CONT " + cont)
//     for (let index = 0; index < cont; index++) {
//         row[i].addEventListener("click", function () {
//             if (i == 0) {
//                 img[index].classList.add("canada-camry");
//                 console.log(index)
//             }
//             // imgcanada.classList.add("canada-camry-hidden");
//         });
//     }

// }


for (let i = 0; i < row.length; i++) {

    // for (let index = 0; index < cont; index++) {
    row[i].addEventListener("click", function () {
        for (let index = 0; index < img.length; index++) {
            if (i == 0) {
                img[cont].classList.add("canada-camry");
                console.log("index" + i)
            }
            if (i == 1) {
                // img[index].classList.add("canada-camry");
                console.log("index" + i)
            }
            // imgcanada.classList.add("canada-camry-hidden");
        }
        cont = cont + 1
    });


}
    // }