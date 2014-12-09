/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 25-sep-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Contiene funciones para calcular fechas
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


/**
 * @description Calcula si un año es o no es bisiesto.
 * @param {Integer} año
 * @returns {Boolean}
 */
function esBisiesto(año) {
    var bisiesto = false;
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0)
        bisiesto = true;
    return bisiesto;
}


/**
 * @description Pide la fecha actual y
 * calcula el dia siguiente dicha fecha.<br>
 * Muestra por pantalla el resultado
 */
function diaSiguiente() {
    //Entrada de valores
    var dia = parseInt(prompt("Día"));
    var mes = parseInt(prompt("Mes"));
    var año = parseInt(prompt("Año"));
    //dias maximos de un mes
    var diasMax;

    //Establecer los dias maximos segun el mes
    switch (mes) {
        case 2:
            diasMax = (esBisiesto(año) ? 29 : 28);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            diasMax = 30;
            break;
        default:
            diasMax = 31;
            break;
    }

    dia++;
    //Calcular he pasado al mes siguiente
    if ((dia) > diasMax) {
        dia = 1;
        mes++;
    }

    //Calcular si he pasado al año siguiente
    if ((mes) > 12) {
        mes = 1;
        año++;
    }

    //Salida por pantalla
    alert(
            "FECHA DEL DIA SIGUIENTE\n" +
            "Dia: " + dia +
            "\nMes: " + mes +
            "\n Año: " + año
            );
}

