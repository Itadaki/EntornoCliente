/*
 * Autor=Javier Salcedo
 * Fecha=14-nov-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion=Javascript donde se realizan cinco funciones: las 4 primeras haran avanzar o retroceder imagenes y la ultima
 *             abre una ventana nueva al pulsar cualquier imagen para visualizar esa imagen en grande
 */


/* 
 * Copyright (C) 2014 Javier Salcedo
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


var cont = 1;
//var cont1 = 0;

//LAura: funciones sin documentar
function principio() { // funcion que al pulsar el boton principio vuelve siempre a la primera imagen

    document.getElementById("imagen").src = "Imagenes/Img0.gif";
}
//Laura: ¿y si son 8 imágenes en vez de 4?
function siguiente() { // funcion que al pulsar el boton siguiente debria ir a la siguiente imagen

    document.getElementById("imagen").src = "Imagenes/Img" + cont + ".gif";
    cont++;

    if (cont == 4) {
        cont = 0;
    }
}

//LAura: esta función no es correcta
function anterior() { // funcion que al pulsar el boton anterior deberia ir a la imagen anterior

    document.getElementById("imagen").src = "Imagenes/Img2.gif";


}
function ultima() { //funcion que al pulsar el boton ultima va a la ultima imagen

    document.getElementById("imagen").src = "Imagenes/Img3.gif";
}

function ventana() { //funcion que al pulsar en la imagen abre una nueva ventana con la imagen pulsada en grande

    window.open(" ", "Imagen en grande", "width=400, height=400");
}
       