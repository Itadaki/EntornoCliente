/*
 * Autor = Félix Martínez Álvaro
 * Fecha = 14-nov-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = JS que contiene las funciones para los botones del visor de imagenes
 */
/* 
 * Copyright (C) 2014 Félix Martínez Álvaro
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


var imagenes = new Array('<img src="fotos/Img0.gif"/>', '<img src="fotos/Img1.gif"/>', '<img src="fotos/Img2.gif"/>', '<img src="fotos/Img3.gif"/>');

function siguiente() {
    /**
     * Descripcion: funcion que visualiza la imagen siguiente. Si es la ultima empeiza desde el principio
     * @method
     * @param {} 
     * @returns {}
     */
    var imagenSeleccionada = document.getElementById("visor").innerHTML;



    if (imagenSeleccionada.indexOf("0") != -1) {
        document.getElementById("visor").innerHTML = imagenes[1];
    }
    else if (imagenSeleccionada.indexOf("1") != -1) {
        document.getElementById("visor").innerHTML = imagenes[2];
    }
    else if (imagenSeleccionada.indexOf("2") != -1) {
        document.getElementById("visor").innerHTML = imagenes[3];
    }
    else if (imagenSeleccionada.indexOf("3") != -1) {
        document.getElementById("visor").innerHTML = imagenes[0];
    }
}

function atras() {
    /**
     * Descripcion: funcion que visualiza la imagen anterior. Si es la primera empieza desde el final
     * @method
     * @param {} 
     * @returns {}
     */
    var imagenSeleccionada = document.getElementById("visor").innerHTML;


    if (imagenSeleccionada.indexOf("3") != -1) {
        document.getElementById("visor").innerHTML = imagenes[2];
    }
    else if (imagenSeleccionada.indexOf("2") != -1) {
        document.getElementById("visor").innerHTML = imagenes[1];
    }
    else if (imagenSeleccionada.indexOf("1") != -1) {
        document.getElementById("visor").innerHTML = imagenes[0];
    }
    else if (imagenSeleccionada.indexOf("0") != -1) {
        document.getElementById("visor").innerHTML = imagenes[3];
    }
}


var cambioFotoIzq = setInterval(function() {
    atras();
}, 1000);
var cambioFotoDcha = setInterval(function() {
    siguiente();
}, 1000);