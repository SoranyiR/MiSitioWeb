class Automovil{
    constructor(marca,modelo,precio,anyo,ciudad,Kilometros,imagen){
        this.marca= marca;
        this.modelo=modelo;
        this.precio=precio;
        this.anyo=anyo;
        this.ciudad=ciudad;
        this.Kilometros=Kilometros;
        this.imagen=imagen
    }
}

let auto1 = new Automovil("Toyota","Prado 2.8 Tx-l", 200000000, 2021, "pitalito - Huila", 35900,"img/Toyota Prado Tx-l 3.0.jpeg");
let auto2 = new Automovil("ford","FOCUS 4.6 ", 300000000, 2021, "bruselas - Huila", 45900,"img/ford.jpg");
let auto3 = new Automovil("bmw","Rolls Royce", 500000000, 2021, "neiva - Huila", 39900,"img/BMW 320i. 1100x765jepg.jpg");
let auto4 = new Automovil("kia","All-New Carens", 130000000, 2021, "isnos - Huila", 12200,"img/kia.jpg");
let auto5 = new Automovil("mazda","Mazda 6 / Mazda Atenza", 250600000, 2021, "pitalito - Huila", 21900,"img/mazda.jpg");

var carrosArrays = [auto1, auto2, auto3, auto4, auto5  ]

let inputBusqueda = document.getElementById("inputBusqueda");

inputBusqueda.addEventListener("keydown", function(event){
// window.addEventListener("load", function(event){
    mainContent.innerHTML="";
    if(event.key == "Enter"){
        carrosArrays.forEach(function(auto, indice){
            console.log("Auto" + (indice + 1) + ":");
            console.log(auto.marca);
        
    let mainContent = document.getElementById("mainContent");
    let boxAuto = document.createElement("div");
    mainContent.appendChild(boxAuto);
    boxAuto.setAttribute("class", "box-auto");

    //crear contenedor para la imagen//

    let boxImg = document.createElement("div");

        /*corazon imagen*/
    let boxCorazon = this.document.createElement("div");
    boxImg.appendChild(boxCorazon);
    boxCorazon.setAttribute("class", "box-corazon")
    let corazon = this.document.createElement("div");
    boxCorazon.appendChild(corazon);
    corazon.setAttribute("class", "corazon")


    /*cargando icono*/
    let iconHearth = this.document.createElement("i");
    corazon.appendChild(iconHearth);
    iconHearth.setAttribute("class", "icons-style-hearth fa-regular fa-heart");

    boxAuto.appendChild(boxImg);
    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    boxImg.setAttribute("class", "box-img");
    imgAuto.setAttribute("src",auto.imagen)
    imgAuto.setAttribute("class", "img-auto");



    /*crear contenedor para la informacion*/
    let boxInfo = document.createElement("div");
    boxAuto.appendChild(boxInfo);
    let infoMarca = this.document.createElement("div");
    boxInfo.appendChild(infoMarca);
    boxInfo.setAttribute("class", "box-info");
    infoMarca.setAttribute("class", "info-marca");
    let txtMarca = document.createElement("label");
    infoMarca.appendChild(txtMarca);
    txtMarca.innerText =auto.marca;
    txtMarca.setAttribute("class", "txt-marca")

    let txtModelo = document.createElement("label");
    infoMarca.appendChild(txtModelo);
    txtModelo.innerText= " "+ auto.modelo;
    txtModelo.setAttribute("class", "txt-modelo")

    /*precio*/
    let precioFormat = new Intl.NumberFormat("de-DE").format(auto.precio);
    let txtPrecio = this.document.createElement("label");
    boxInfo.appendChild(txtPrecio);
    txtPrecio.innerHTML = "$" + precioFormat;
    txtPrecio.setAttribute("class", "txt-precio")
   

/*kilometraje y procedencia*/
    let boxProcedencia = document.createElement("div");
    boxInfo.appendChild(boxProcedencia);
    boxProcedencia.setAttribute("class", "box-procedencia");

    let txtanyo = document.createElement("label");
    boxProcedencia.appendChild(txtanyo);
    txtanyo.innerHTML = auto.anyo + " · ";

    let txtKilometros = document.createElement("label");
    boxProcedencia.appendChild(txtKilometros);
    let txtKilometrosFormat = new Intl.NumberFormat("de-DE").format(auto1.Kilometros);
    txtKilometros.innerHTML = txtKilometrosFormat + " · ";

    let txtciudad = document.createElement("label");
    boxProcedencia.appendChild(txtciudad);
    txtciudad.innerHTML = auto.ciudad;

    let boxLineaDiv = document.createElement("div");
    mainContent.appendChild(boxLineaDiv);
    boxLineaDiv.setAttribute("class", "box-linea-div");
}
)
}}); 
