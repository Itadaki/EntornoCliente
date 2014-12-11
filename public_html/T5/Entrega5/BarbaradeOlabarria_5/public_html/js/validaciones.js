/*
 * Autor= Bárbara de Olabarria
 * Fecha= 05-dic-2014
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= Documento JavaScript con las funciones de validación para el documento FormularioCV.html
 **/
/* 
 * Copyright (C) 2014 Bárbara de Olabarria
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

/** Función para validar las funciones del ejercicio**/
/**
 * 
 * @function validar
 * @param {type} fecha
 * @param {type} telefono
 * @param {type} clave
 * @returns {Boolean}
 */

//Laura: Bárbara no tiene sentido que pases a validar cadenas por parámetro.
function validar(fecha, telefono, clave) {
    return validaFecha(fecha) && validaTelefono(telefono) && validaClave(clave);
}

/** Función para validar la fecha**/
/**
 * @function  validaFecha
 * @param {type} fecha
 * @returns {Boolean}
 */
//Laura: 10/88/1983 lo coge como válido. Hay que validar con expresión regular
function validaFecha(fecha) {
    var fecha = document.getElementById(fecha).value;
    var numeros;
    if (/^[0-9]{2}\/[0-9]{2}\/19[0-9]{2}$/.test(fecha) && fecha !== null) {
        numeros = fecha.split("/");
        if ((numeros[0] >= 1 && numeros[0] <= 31) && (numeros[1] >= 1 && numeros[1] <= 12) && (numeros[2] >= 1900 && numeros[2] <= 1999)) {
            if ((numeros[0] === 1) || (numeros[1] === 1)) {
                numeros[0] = '0'.concat(numeros[0]);
                numeros[1] = '0'.concat(numeros[1]);
            }
            return true;
        }
    }
    else {
        alert("Fecha no válida");
        return false;
    }
}
/** Función para validar el teléfono**/
/**
 * @function validaTelefono
 * @param {type} telefono
 * @returns {Boolean}
 */
function validaTelefono(telefono) {
    var telefono = document.getElementById(telefono).value;
    if (/^(6|9)[0-9]{8}$/.test(telefono) && telefono !== null) {
        return true;
    }
    else {
        alert("Teléfono no válido");
        return false;
    }
}
/** Función para validar la clave**/
/** 
 * @function validaClave
 * @param {type} clave
 * @returns {Boolean}
 */
function validaClave(clave) {
    var clave = document.getElementById(clave).value;
    if ((/^[0-9][a-z]{3}\W[0-9]$/).test(clave) && clave !== null) {
        return true;
    }
    else {
        alert("Clave no válida");
        return false;
    }
}


