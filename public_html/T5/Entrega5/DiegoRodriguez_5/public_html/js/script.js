/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 05-dic-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Funciones para el control del formulario
 */

/* 
 * Copyright (C) 2014 Diego Rodríguez Suárez-Bustillo
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


var errores; //Valor del campo de error
var FECHA = 0, TELF = 1, CLAVE = 2; //CTEs para la validacion
var mensajes = [
    'La fecha debe ser del siglo XX',
    'El telefono debe tener 9 digitos y empezar por 6 o 9',
    'La clave debe empezar por un numero, seguido de tres letras, un simbolo y otr numero'];
/**
 * @description Valida los campos necesaros
 * @returns {Boolean}
 */
function validar() {
    errores = '';
//    var fechaExp = /^[0-3]\d\/[0-1]\d\/19\d{2}/ la del examen
    var fechaExp = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/19\d{2}$/,
            telfExp = /^(9|6)\d{8}$/,
            claveExp = /^\d\D{3}\W\d$/;
    //En el primer false ya salta al else.
    //Por eso los errores salen de uno en uno
    if (comprobarExp(FECHA, fechaExp) &&
            comprobarExp(TELF, telfExp) &&
            comprobarExp(CLAVE, claveExp)) {
        return true;
    }
    document.getElementById('error').innerHTML = errores;
    return false;
}
/**
 * @description Comprueba si el campo cumple con la expresion regular<br>
 * Si no, elimina su contenido y modifica el campo de errores
 * @param {type} cteCampo El id del campo
 * @param {type} expresion La expresion regular
 * @returns {Boolean}
 */
function comprobarExp(cteCampo, expresion) {
    var idCampos = ['fecha', 'telefono', 'clave'];
    var campo = document.getElementById(idCampos[cteCampo]);
    if (expresion.test(campo.value)) {
        return true;
    } else {
        campo.value = '';
        //Laura: cuando se vacía un campo incorrecto hay que deshailitar el botón de envío hasta que todos los campos esteén rellenos
        errores += mensajes[cteCampo];
        activarCasilla(); //esto es el arreglo
        return false;
    }
}

/**
 * @description Comprueba si todos los campos estan rellenos y activa el boton de envio
 */
////Version del examen
//function activarEnvio() {
//    //Laura: esta función la puedes hacer un poco más eficiente
//    var desactivado = false;
//    var arr = [
//        document.getElementById('nombre').value,
//        document.getElementById('apellidos').value,
//        document.getElementById('fecha').value,
//        document.getElementById('telefono').value,
//        document.getElementById('titulacion').value,
//        document.getElementById('cv').value,
//        document.getElementById('clave').value
//    ];
//    for (var i = 0; i < arr.length; i++) {
//        if (arr[i].length === 0) {
//            desactivado = true;
//        }
//    }
//    document.getElementById('envio').disabled = desactivado;
//}

function activarCasilla(){
    var desactivado = false;
    var terminos = document.getElementById('terminos');
    var inputs = document.getElementById('form_cv');
    for (var i = 0; i < inputs.length - 2; i++) {
        if (inputs[i].value.length === 0) {
            desactivado = true;
        }
    }
    terminos.disabled = desactivado;
    if (desactivado){
        terminos.checked = false;
    }
    activarEnvio();
}

function activarEnvio() {
    document.getElementById('envio').disabled = !document.getElementById('terminos').checked;
}

function añadir(){
    var opciones = document.getElementById('opciones');
    var idiomas = document.getElementById('idiomas');
}
function quitar(){
    var opciones = document.getElementById('opciones');
    var idiomas = document.getElementById('idiomas');
}
