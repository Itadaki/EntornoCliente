/*
 * Autor=Mario Ramírez Padilla
 * Fecha=17-oct-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion=Realizar un script que solicite al usuario un numero de cuenta bancaria con el formato
 ####-####-##-##########
 */
/* 
 * Copyright (C) 2014 Mario Ramírez Padilla
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

//Laura: estas variables dentro de las funciones
var ncuenta;
var ncuenta1;
var fecha = new Date().getDate();
var dia = new Date().getDay();
var mes = new Date().getMonth() + 3;
var año = new Date().getFullYear()+1;


//Laura: falta comentar la función como os pedí
function numerocuenta() {
    //Laura: hay que pedir el número mientras no sea correcto
    //Laura:No funciona correctamente. 1234-5678-98-0123456789-788 me dice que es correcta. Para cuentas erróneas el programa sigue y muestra las parte de la cuenta
    ncuenta = prompt("Introduce el numero de cuenta"); /* pedimos el numero de cuenta*/
    ncuenta1 = ncuenta.split('-'); /* Lo convertimos en un array*/
    for (var i = 0; i < ncuenta1.length; i++) {
        if (isNaN(ncuenta1[i])) {
            alert("Algun caracter introducido no es un número");/* comprobamos que todo son números*/
        }
    }
    if (ncuenta1[0].length < 4 || ncuenta1[0].length > 4) { /* Comprobamos que el número de dígitos es el correcto*/
        alert("Los digitos de la entidad son erroneos");
    }
    else if (ncuenta1[1].length < 4 || ncuenta1[1].length > 4) {
        alert("Los digitos de la oficina son erroneos");
    }
    else if (ncuenta1[2].length < 2 || ncuenta1[2].length > 2) {
        alert("Los digitos del DC son erroneos");
    }
    else if (ncuenta1[3].length < 10 || ncuenta1[3].length > 10) {
        alert("Los digitos de la cuenta son erroneos");
    }
    else {
        alert("El numero introducido es correcto");

    }
    alert("El numero de identidad es: " + ncuenta.substr(0, 4) + "\n El número de oficina es: "
            + ncuenta.slice(5, 9) + "\n El numero de DC es: " + ncuenta.slice(10, 12) + "\n El numero de cuenta es " + ncuenta.slice(13, 23)); /* mostramos datos*/
    //Laura: El cálcurlo de la fecha de dentro de 90 días es incorrecto.
    alert("La fecha de comuienzo del pago de comisiones es: " + dia + "/" + mes + "/" + año); /* mostramos fechas*/

}


