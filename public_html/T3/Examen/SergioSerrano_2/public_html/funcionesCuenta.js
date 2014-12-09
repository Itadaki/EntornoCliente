/*
 Autor = Sergio Serrano Mejias
 Fecha = 17-oct-2014
 Licencia = gpl30
 Version = 1.0
 Descripcion = Funciones Del Ejercicio de Cuenta Bancaria
 */
/* 
 * Copyright (C) 2014 Sergio Serrano Mejias
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
 * No le paso nada a ninguna y no devuelven nada
 * Laura: lo que hace la función se pone aquí
 * @returns {undefined}
 */
//Laura: no hacen falta tantas funciones. 
function comprobacionLongitudCadena() { // comprueba la longitud de la cadena entera
    if (nCuenta.length === 23) {
        falloLongCad = false; 
    }
}

//Laura: todas las funciones se comentan igual
function comprobacionLongitudPartes() { // comprueba que longitud de cada parte de la cuenta sea la correcta
    if (arrCuenta[0].length === 4 || arrCuenta[1].length === 4 || arrCuenta[2].length === 2 || arrCuenta[3].length === 10) {
        falloLongPartes = false;
    }

}

//Laura: no hace falta comprobar dígito a digito
function comprobacionNumerica() { // comprueba que cada parte de la cuenta son numeros
    for (var i = 0; i < arrCuenta.length; i++) {
        if (isFinite(arrCuenta[i])) {
            falloNumerico = false;
        }
    }
}

function fechaComisiones() {
    dia = 24 * 60 * 60 * 1000; // milisegundos de un dia
    ms = new Date().getTime() + (dia * 90); // la fecha en milisegundos de dentro de 90 dias
    fComienzo = new Date(ms); //creo una nueva fecha con esos datos
    //Laura: el formato era DD/MM/YYYY
    alert('Usted comenzará a pagar comisiones en 90 días :\nEl día ' + fComienzo.toLocaleDateString());
    alert('Gracias por confiar en SergioBank ;)');
}
