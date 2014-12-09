/*
 *Autor= Miguel A Benito
 *Fecha= 14-nov-2014
 *Licencia= gpl30
 *Version= 1.0
 *Descripcion= script javascript para controlar un visor de imagenes, con cuatro funciones para avanzar y retroceder en el mismo, una de almacen de imagenes, y otra para el visor de la url 
 */


/* 
 * Copyright (C) 2014 Saphirum
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




/**
 * nombre: Imagenes
 * variables: imgs( array contenedor de las imagenes) 
 */
function Imagenes() {
    var imgs = new Array();
    //Laura: en firebug sale un error que dice imgs no es una función
    imgs = ("img0.gif", "img1.gif", "img2.gif", "img3.gif");
    var actual = imgs(0);
    document.getElementById(mostrar).scr = actual;

}

/**
 * nombre: url
 * variables:url
 * return:devuelve la url actual
 */
function Url() {
    //asigno a url la url de la paguina actual.
    var url = document.URL;
    document.getElementById("url").value = url;
}


/**
 * nombre: adelante
 * variables:img
 * return: 
 * fallos:
 */
//funcion para ir a la siguiente imagen
function Adelante() {





}

/**
 * nombre: Atras
 * variables: img
 * return: 
 * fallos:
 */
// funcion para volver a la imagen anterior
function Atras() {





}

/**
 * nombre: primera
 * variables: img
 * return: 
 * fallos:
 */
//funcion para volver a la primera imagen
function Primera() {





}

/**
 * nombre: ultima
 * variables: img
 * return: 
 * fallos:
 */
// funcion para volver a la ultima imagen
function Ultima() {





}

