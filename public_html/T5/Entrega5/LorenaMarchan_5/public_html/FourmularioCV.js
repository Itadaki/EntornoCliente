/*
 Autor=Lorena Marchan
 Fecha=05-dic-2014
 Licencia=gpl30
 Version=1.0
 Descripcion=Documento JavaScript que hace las validaciones del formularioCV.html
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



/**
 * nombre: validar 
 * funcion:devuelve un booleano true si todas las validaciones son true
 * @returns {Boolean}
 */
function validar() {
    return valiFecha('fecha') && valiTelefono('telefono') && valiClave('clave');
}
/**
 * nombre: enviarDesab
 * funcion:deshabilita el boton enviar si algun campo esta vacio
 * @param {boton}
 * @returns {nada}
 */
function enviarDisab(boton) {
    var input = true;
    var inputs = document.getElementsByTagName('input');
    //pongo .length-1 porque no quiero contar el input tipo subtmit (el boton)
    for (var i = 0; i < (inputs.length - 1); i++) {
        if (inputs[i].value.length === 0 | inputs[i].value === null) {
            input = false;
            break;
        }
    }
    var select = (document.getElementById('titulacion').selectedIndex == 0) ? false : true;
    if (!input || !select) {
        document.getElementById(boton).disabled = true;
    } else {
        document.getElementById(boton).disabled = false;
    }
}
/**
 * nombre: valiFecha
 * funcion:valida un campo de fecha
 * @param {c}
 * @returns {boolean}
 */
function valiFecha(c) {
    //Laura: toda la validación con expresión regular
    var campo = document.getElementById(c).value;
    if (/^\d{2}\/\d{2}\/19\d{2}$/.test(campo)) {
        var dia = campo.substr(0, 2);
        var mes = campo.substr(3, 2);
        if (dia > 0 && dia <= 31 && mes > 0 && mes <= 12) {
            return true;
        }
    }
    //Laura: cuando se introduce un campo incorrecto hay que vaciar el campo y deshabilitar el botón
    alert('el campo "fecha" debe tener el siguiente formato dd/mm/19aa');
    return false;
}
/**
 * nombre: valiTelefono
 * funcion:valida un campo de telefono
 * @param {c}
 * @returns {boolean}
 */
function valiTelefono(c) {
    var campo = document.getElementById(c).value;
    if (/^[96]\d{8}$/.test(campo)) {

        return true;
    }
    alert('el campo "telefono" debe ser numerico\n de 9 cifras y que empiece por 9 o 6');
    return false;
}
/**
 * nombre: valiClave
 * funcion:valida un campo de clave
 * @param {c}
 * @returns {boolean}
 */
function valiClave(c) {
    var campo = document.getElementById(c).value;
    if (/^\d\D{3}\W\d$/.test(campo)) {
        return true;
    }
    alert('el campo "clave" debe empezar por un numero, \nseguido de 3 letras a continuacion un simbolo\n y acabar en otro numero');
    return false;
}