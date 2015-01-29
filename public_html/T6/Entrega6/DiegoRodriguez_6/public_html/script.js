/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 26-ene-2015
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Contiene funciones para el control del numero de campos 
 *               del formulario
 */

/* 
 * Copyright (C) 2015 Diego Rodríguez Suárez-Bustillo
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

//Laura: muy bien documentado Diego
/**
 * @description Contador de campos del formulario
 * @type Number
 */
var camposActuales = 1;

/**
 * @description Establece el mínimo de campos del formulario
 * @constant
 * @type Number
 */
var MIN_CAMPOS = 1;

/**
 * @description Establece el máximo de campos del formulario
 * @constant
 * @type Number
 */
var MAX_CAMPOS = 10;

/**
 * @description Añade un nuevo campo de texto al formulario, con un label <br>
 * y dos saltos de linea
 */
function añadir() {
    var boton = document.getElementById('b1');
    //Crear elemento tipo label y rellenarlo
    var label = document.createElement('label');
    label.innerHTML = 'Campo' + camposActuales++ + ' ';
    //Crear cadena tipo input con dos <BR>
    var inputBr = '<input type="text" id="c' + camposActuales + '" name="campo' + camposActuales + '"><br><br>';
    //Inserta los elementos antes del botón
    boton.parentNode.insertBefore(label, boton);
    boton.insertAdjacentHTML('beforebegin', inputBr);
    comprobar();
}

function añadirCore() {
    var boton = document.getElementById('b1');
    //Crear elemento tipo label y rellenarlo
    var label = document.createElement('label');
    label.innerHTML = 'Campo' + camposActuales++ + ' ';
    //Crear cadena tipo input
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'c' + camposActuales);
    input.setAttribute('name', 'campo' + camposActuales);
    boton.parentNode.insertBefore(label, boton);
    boton.parentNode.insertBefore(input, boton);
    //Insertar dos BR
    boton.parentNode.insertBefore(document.createElement('br'), boton);
    boton.parentNode.insertBefore(document.createElement('br'), boton);
    comprobar();
}

function añadirDOM() {
    var boton = document.getElementById('b1');
    //Crear elemento tipo label y rellenarlo
    var label = '<label>Campo'+camposActuales++ +' </label>';
    //Crear cadena tipo input con dos <BR>
    var inputBr = '<input type="text" id="c' + camposActuales + '" name="campo' + camposActuales + '"><br><br>';
    //Inserta los elementos antes del botón
    boton.insertAdjacentHTML('beforebegin', label);
    boton.insertAdjacentHTML('beforebegin', inputBr);
    comprobar();
}

/**
 * @description Elimina el último campo de texto del formulario, junto a su label <br>
 * y los dos saltos de linea
 */
function borrar() {
    var input = document.getElementById('c' + camposActuales--);
    var formulario = document.getElementById('f1');
    //Elimina los dos saltos de linea
    formulario.removeChild(input.nextSibling);
    formulario.removeChild(input.nextSibling);
    //Elimina el label
    formulario.removeChild(input.previousSibling);
    //Elimina el input
    formulario.removeChild(input);
    comprobar();
}

/**
 * @description Maneja el estado de los botones añadir y borrar
 */
function comprobar() {
    var añadir = document.getElementById('b1');
    var borrar = document.getElementById('b2');
    //Laura: Esto lo puedes hacer más simple así
    añadir.disabled = !(camposActuales < MAX_CAMPOS);
    borrar.disabled = !(camposActuales > MIN_CAMPOS);
    /*if (camposActuales < MAX_CAMPOS) {
     añadir.disabled = false;
     } else {   
     añadir.disabled = true;
     }
     if (camposActuales > MIN_CAMPOS) {
     borrar.disabled = false;
     } else {
     borrar.disabled = true;
     }*/
}