/*
 * Autor=Patricia Del Moral Jiménez
 * Fecha = 14-nov-2014
 * Licencia = gpl30
 * Versión=1.0
 * Descripción= Vamos a desarrollar las funciones de los botones para poder mostrar las imagenes.
 */

/* 
 * Copyright (C) 2014 Patricia Del Moral Jiménez
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
var imagenes = new Array('Fotos/0.gif', 'Fotos/1.gif', 'Fotos/2.gif', 'Fotos/3.gif',
        'Fotos/flecha_dcha.gif', 'Fotos/flecha_izda.gif');


//Laura: las funciones no hacen lo que pido
//Funcion para el boton siguiente
function siguiente() {
    for (var i = 0; i < imagenes.length; i++) {
        alert(imagenes[i] + "," + i);
    }
}

//Funcion para el boton atras
function atras() {
    imagenes.reverse();
    for (var i = 0; i < imagenes.length; i++) {
        alert(imagenes[i] + "," + i);
    }
}

//Funcion para el boton principio
function primera() {
    alert(imagenes[0]);
}

//Funcion para el boton final
function ultima() {
    alert(imagenes[5]);
}