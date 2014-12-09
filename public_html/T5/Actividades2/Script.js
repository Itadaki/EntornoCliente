
/*
 <!--
 Autor = Javier Oltra Riera
 Fecha = 05-dic-2014
 Licencia = default
 Version = 1.0
 Descripcion = 
 -->
 */
/* 
 Copyright (C) 2014 Javier Oltra Riera
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * 
 * @description Funcion que se encarga de comprobar si los campos estan rellenos o no, si estan todos rellenos habilita el boton enviar
 */
function validarSubmit() {
    var relleno = true;
    var formulario = document.getElementsByName("formulario");
    for (var i = 0; i < formulario.length; i++) {
        if (formulario[i].value == "") {
            relleno = false;
            break;
        }
    }
    if (relleno) {
        document.getElementById("envio").disabled = false;
    } else {
        document.getElementById("envio").disabled = true;
    }
}
/**
 * @description Funcion que comprueba si las validaciones por separado son correctas, en el caso de no serlo indica cual es la erronea.
 * @returns {Boolean}
 */
function validar() {
    if (validarFecha()) {
        if (validarTelefono()) {
            if (validarClave()) {
                return true;
            } else {
                document.getElementById("clave").value = "";
                alert("Introduce una clave correcta EJ: 7ahf@2");
                return false;
            }
        } else {
            document.getElementById("telefono").value = "";
            alert("Introduce un telefono correcto (9 o 6 y 8 numeros mas)");
            return false;
        }
    } else {
        document.getElementById("fecha").value = "";
        alert("Introduce una fecha correcta DD/MM/YYYY");
        return false;
    }
}
/**
 * @description Funcion que valida la fecha, comprueba que sea DD/MM/YYYY y valida si los dias, mes y año son correctos.
 * @returns {Boolean}
 */
function validarFecha() {
    var diamesano = new Array();
    var fecha = document.getElementById("fecha").value;
    if ((/^\d{2}\/\d{2}\/\d{4}$/.test(fecha))) {
        diamesano = fecha.split("/");
        if (diamesano[0] > 0 && diamesano[0] < 32) {
            if (diamesano[1] > 0 && diamesano[1] < 13) {
                if (diamesano[2] > 1899) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {

            return false;
        }
    } else {
        return false;

    }
}
/**
 * @description Funcion que valida si el telefono empieza por 6 o 9 y contiene 9 numeros.
 * @returns {Boolean}
 */
function validarTelefono() {
    var telefono = document.getElementById("telefono").value;
    if ((/^[96]\d{8}$/.test(telefono))) {
        return true;
    } else {
        return false;

    }
}
/**
 * @description Funcion que valida si la clave esta formada por numero letra letra letra simbolo numero.
 * @returns {Boolean}
 */
function validarClave() {
    var clave = document.getElementById("clave").value;
    if ((/^\d{1}\D{3}\W{1}\d{1}$/.test(clave))) {
        return true;
    } else {
        return false;

    }
}

