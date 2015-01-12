/*
 * Autor=Mario Ramírez Padilla
 * Fecha=05-dic-2014
 * Licencia=default
 * Version=1.0
 * Descripcion=
 */
/* 
 Copyright (C) 2014 Mario Ramírez Padilla
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>..
 */

//Laura: en nombre y apellidos no había que validar nada, sólo que estuviesen rellenos. No tienes hecha ninguna de las validaciones
var titulacion = ["fp", "titulado", "licenciado", "grado"];
var titulaciones = document.getElementById("cont").selectedIndex;
function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if ((/^[A-Za-z]\d{10}$/.test(nombre))) {
        return true;
    } else {
        return false;
        aslert("Solo pueden ser letras")
    }
}
function validarApellidos() {
    var apellidos = document.getElementById("apellidos").value.split(" ");
    if ((/^[6,9]\d{1}[1-9]\d{9}$/.test(apellidos[0]) || /^[6,9]\d[1-9]\d{9}$/.test(apellidos[1]) )) {
        return true;
    } else {
        return false;
    }
}
function comprobacion() {
    if (validarNombre() && validarApellidos()) {
        return true;
    } else {
        return false;
    }
}