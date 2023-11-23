let imagen = document.querySelector('.imagen')


let boton = document.querySelector('#cambiarImagen')

let imagenCambiada = false;

boton.onclick = function () {
    if (imagenCambiada == false) {
        imagen.src = 'imagenes/enchanted.webp'
        imagenCambiada = true
    }else{
        imagen.src = "imagenes/imagenes/27taylor-metlife-01-topart-tbvp-videoSixteenByNineJumbo1600-v2.jpg"
        imagenCambiada = false
    } }