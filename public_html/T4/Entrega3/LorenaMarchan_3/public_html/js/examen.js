/*
 Autor=Lorena Marchan
 Fecha=14-nov-2014
 Licencia=gpl30
 Version=1.0
 Descripcion=Script JavaScript para las funciones del Visor de Imagenes.
            Visor de Imagenes que al pulsar sobre los botones cambia la imagen, 
            y al pulsar sobre la imagen abre una ventana nueva de 500x500 con la imagen.
 */

/* 
 * Copyright (C) 2014 Lorena Marchan
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


//Laura: al abrir tu html da error TypeError: document.getElementById(...) is null línea 39
var nimagenes = ["Img0.gif", "Img1.gif", "Img2.gif", "Img3.gif"];

window.onload = url();

/*
 * nombre:url
 * descripcion:inserta en el campo de texto la url de la imagen
 * no tiene argumentos y no devuelve nada;
 */
function url() {
    //Laura: si no tienes una imagen de donde sacas la URL?
    document.getElementById("url").value = document.getElementById("imagen").src;
}

/*
 * nombre:grande
 * descripcion:abre una nueva ventana con la imagen actual
 * no tiene argumentos y no devuelve nada;
 */
function grande() {
    var nueva = window.open("ventanasecundaria.html", "nueva ventana", "width=500, height=500");
    nueva.img = "<img src='" + document.getElementById("imagen").src + "' id='imagen' alt='u'>";
}

/*
 * nombre:primero
 * descripcion:cambia la ruta de la imagen por la ruta de la primera imagen
 * no tiene argumentos y no devuelve nada;
 */
function primero() {
    document.getElementById("imagen").src = "img/" + nimagenes[0];
}

/*
 * nombre:anterior
 * descripcion:cambia la ruta de la imagen por la ruta de la imagen anterior
 * no tiene argumentos y no devuelve nada;
 */
//Laura: las funciones anterior y siguiente se puden hacer algo más efientes
function anterior() {
    //urlImagen es ruta de la imagen actual
    var urlImagen = document.getElementById("imagen").src; //img1
    for (var i = 0; i < nimagenes.length; i++) {
        if (urlImagen.indexOf(nimagenes[i]) != -1) {
            if (i > 0) {
                document.getElementById("imagen").src = "img/" + nimagenes[i - 1];
            }
            else {
                ultimo();
            }
        }

    }

}

/*
 * nombre:siguiente
 * descripcion:cambia la ruta de la imagen por la ruta de la imagen siguiente
 * no tiene argumentos y no devuelve nada;
 */
function siguiente() {
//urlImagen es ruta de la imagen actual
    var urlImagen = document.getElementById("imagen").src;
    for (var i = 0; i < nimagenes.length; i++) {
        if (urlImagen.indexOf(nimagenes[i]) != -1) {
            if (i < (nimagenes.length - 1)) {
                document.getElementById("imagen").src = "img/" + nimagenes[i + 1];
            }
            else {
                primero();
            }
        }
    }

}

/*
 * nombre:ultimo
 * descripcion:cambia la ruta de la imagen por la ruta de la ultima imagen
 * no tiene argumentos y no devuelve nada;
 */
function ultimo() {
    document.getElementById("imagen").src = "img/" + nimagenes[(nimagenes.length - 1)];
}

