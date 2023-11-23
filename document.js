let = fotoMostrada = "imagen/loverS1.jpg"


function miFuncion(){
    let elemento= document.getElementById("foto")
    elemento.src = "imagenes/loverS2.jpg"

    if(fotoMostrada == "imagenes/loverS1.jpg"){
        imagen.src ="imagenes/loverS2.jpg";
        fotoMostrada= "imagenes/loverS2.jpg"
    }
}