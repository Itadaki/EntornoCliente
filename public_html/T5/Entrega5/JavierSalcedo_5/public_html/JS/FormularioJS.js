/*
 * Autor=Javier Salcedo
 * Fecha=05-dic-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion=Javascript que sirve para validar los datos que introducimos en un curriculum. Hasta que no este todo correcto y validado el 
 *             boton enviar no se habilita
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


/**
 * @name validaFecha
 * @param {type} ninguno
 * @returns {Boolean}
 * @description funcion que valida si una fecha esta bien introducida con un formato determinado
 * 
 */
function validaFecha() {
    //Laura: hay que validar con expresión regular
    //La funcion calcula el dia, mes y año siguiente a la fecha que ha introducido el usuario
    var fecha = document.getElementById("fecha").value;
    var dia = parseInt(fecha.substr(0, 2));
    var mes = parseInt(fecha.substr(3, 2));
    var anyo = parseInt(fecha.substr(6, 4));

    var correcta = false;
    if (fecha.length == 10 && fecha.charAt(2) == '/' && fecha.charAt(5) == '/') {
        switch (mes) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                if (dia <= 31) {
                    correcta = true;
                }
                break;
            case 2:
                if ((anyo % 4 == 0 && anyo % 100 != 0) || anyo % 400 == 0) { //Entra si el año es bisiesto
                    if (dia <= 29) {
                        correcta = true;
                    }
                }
                else {
                    if (dia <= 28) {
                        correcta = true;
                    }
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (dia <= 30) {
                    correcta = true;
                }
                break;
        }
    }

    if (!correcta)
        alert("Fecha incorrecta, la fecha debe de seguir el siguiente formato: DD/MM/YYYY");

    return correcta;
}
/**
 * @name validaTel
 * @description Función que valida si un telefono esta bien introducido
 * @param {type} telefono
 * @returns {Boolean}
 */

function validaTel(telefono) {
    valor = document.getElementById(telefono).value;
    if (!(/^[9|6]\d{8}$/.test(valor))) { /*expresion regular para que el numero de telefono empiece por 6 o 9 seguidos de 8 numeros*/
        alert("telefono incorrecto, el telefono debe de empezar por 6 0 9 seguido de 8 numeros/nEjemplo:9xxxxxxxx");
        document.getElementById("telefono").value = "";
        return false;

    }
    return true;
}

/**
 * @name validaClave
 * @description Fucion que valida una clave
 * @param {type} ninguno
 * @returns {Boolean}
 */
function validaClave() {

    var clave = document.getElementById("clave").value;

    if (!(/^\d{1}[a-zA-Z]{3}\W{1}\d$/.test(clave))) { /*expresion regular para que en la clave se componga de: un numero, 3 letras, un simbolo, un numero*/

        alert("clave mal introducida, debes introducir un numero, 3 letras, un simbolo, un numero/nEjemplo:7ahf@8");
        document.getElementById("clave").value = "";
        return false;

    }
    else {

        return true;
    }

}
/**
 * @name validar
 * @description Funcion que valida si las funciones anteriores devuelven verdadero o falso
 * @param {type} ninguno
 * @returns {Boolean}
 */
function validar() {

    if (validaFecha() && validaTel("telefono") && validaClave()) {

        return true;
    }
    return false;
}
/**
 * @name requi
 * @description Funcion que valida si todo lo anterior es verdadero para asi poder habilitar el boton enviar
 * @param {type}ninguno
 * @returns {undefined}
 */

//Laura: sólo llamas a esta función en la lista desplegable. No se habilita y deshabilita el botón de envio correctamente
function requi() {

    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var fecha = document.getElementById("fecha");
    var telefono = document.getElementById("telefono");
    var titulacion = document.getElementById("titulacion");
    var curriculum = document.getElementById("cv");
    var clave = document.getElementById("clave");


    if (nombre != null && apellidos != null && validar() && titulacion.selectedIndex > 0) {

        document.getElementById("envio").disabled = false;
    }
    else {
        document.getElementById("envio").disabled = true;

    }

}