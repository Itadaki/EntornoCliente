/* Autor=Elias Sanchez Arroyo
 * Fecha=14-nov-2014
 * License=Expression proyect is undefined on line 3, column 14 in Templates/ClientSide/javascript.js.
 * Version=1.0
 * Descripcion= fichero javascript que contiene todas las funciones utilizadas en los documentos html Version1 y Version2
 */
/* 
 * Copyright (C) 2014 Elias Sánchez
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

/*Array que incluye todas las imagenes tratadas por las siguientes funciones*/
var Imagenes = new Array("./Imagenes/Img0.gif", "./Imagenes/Img1.gif", "./Imagenes/Img2.gif", "./Imagenes/Img3.gif");
/*Indicador de la posición de la imagen en el array anterior*/
var i = 0;

/*Nombre: nextImage()
 *Descripción: Avanza el indice del array en una unidad siempre y cuando este sea menor que la longitud del array - 1, si no, este pasara a valer 0
 después, deja la imagen correspondiente en id=imagen*/
//Laura: next y back se pueden hacer algo mñas eficientes.
function nextImage()
{
    if (i < Imagenes.length - 1)
    {
        i++;
        document.getElementById("imagen").src = Imagenes[i];
    }
    else
    {
        i = 0;
        document.getElementById("imagen").src = Imagenes[i];
    }
}

/*Nombre: nextImage()
 *Descripción: Retrasa el indice del array en una unidad siempre y cuando este sea mayor que cero, si no, este pasara a valer la longitud del array - 1
 después, deja la imagen correspondiente en id=imagen*/
function backImage()
{
    if (i > 0)
    {
        i--;
        document.getElementById("imagen").src = Imagenes[i];
    }
    else
    {
        i = Imagenes.length - 1;
        document.getElementById("imagen").src = Imagenes[i];
    }
}

/*Nombre: firstImage()
 *Descripción: Deja el indice del array en 0 y deja la imagen correspondiente en el id=imagen*/
function firstImage()
{
    i = 0;
    document.getElementById("imagen").src = Imagenes[i];
}
/*Nombre: firstImage()
 *Descripción: Deja el indice del array en Imagenes.length - 1 y deja la imagen correspondiente en el id=imagen*/
function lastImage()
{
    i = Imagenes.length - 1;
    document.getElementById("imagen").src = Imagenes[i];
}

/*Intervalo será el número correspondiente a la imagen recorrida por la siguiente funcion*/
var intervalo;
/*Nombre: mouseOverNext()
 *Descripcion: realiza en un intervalo de un segundo, un salto a la siguiente imagen y lo deja en la variable intervalo
 *Return: intervalo*/
//Laura: el return sobra
function mouseOverNext()
{
    intervalo = setInterval(nextImage(), 1000);
    return intervalo;
}
/*Nombre: mouseOverBack()
 *Descripcion: realiza en un intervalo de un segundo, un salto a la anterior imagen y lo deja en la variable intervalo
 *Return: intervalo*/
//Laura: no te funcionaba porque hay que pasar el nombre de la función entrecomillado al setInterval
function mouseOverBack()
{
    intervalo = setInterval(backImage(), 1000);
    return intervalo;
}

/*Nombre: mouseOut()
 *Descripcion: limpia el proceso de las dos funciones anteriores*/
function mouseOut()
{
    clearInterval(intervalo);
}