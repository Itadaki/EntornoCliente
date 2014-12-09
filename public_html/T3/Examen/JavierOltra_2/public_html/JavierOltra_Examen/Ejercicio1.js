
/*
 <!--
 Autor = Javier Oltra Riera
 Fecha = 17-oct-2014
 Licencia = gpl30
 Version = 1.0
 Descripcion = Examen Tema 3, 
 Funcion nunumeroCuenta(): Comprobar si la cuenta bancaria es correcta, en caso de que sea correcta imprimirla por partes.
 Funcion fecha(): Calcula la fecha que sera en 90 dias.
 -->
 */
/* 
 * Copyright (C) 2014 Javier Oltra Riera
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

//Laura: falta comentar funciones como os pedí
function numeroCuenta() {

    var cuenta = prompt("Introduce el numero de cuenta");
    var comprobacion = true;
    do {
        //Laura:funciona pero es ineficiente y muy díficil de entender
        for (var i = 0; i < cuenta.length; i++) {
            if (!isNaN(cuenta.charAt(i)) && cuenta.length == 23 && (i < 4 || (i > 4 && i < 9) || (i > 9 && i < 12) || i > 12)) {
                comprobacion = true;
                //Comprueba que es un numero y que esta en la posicion en la que tiene que ir un numero y si no es un numero compruba que esta en la posicion que debe ir el caracter.
                //Comprueba que la cuenta tiene 23 caracteres.
            } else {
                if (cuenta.charAt(i) != '-') {
                    comprobacion = false;
                    break;
                    //Comprueba que el caracter que no es un numero es un '-'
                }
            }
        }
        if (!comprobacion) {
            cuenta = prompt("Numero de cuenta mal escrito, vuelve a escribirlo");
        }
    } while (!comprobacion);
    // Si el numero de cuenta no es correcto lo pedira hasta que sea correcto.

    alert("Entidad: " + cuenta.slice(0, 4));
    alert("Oficina: " + cuenta.slice(5, 9));
    alert("DC: " + cuenta.slice(10, 12));
    alert("Numero Cuenta: " + cuenta.slice(13, 23));
    //Utilizo el metodo slice para seleccionar las partes que quiero imprimir de la cadena.

}

//Laura: falta comentar funciones como os pedí
function fecha() {

    var fechaUnix = new Date(1970, 1, 1);
    var fechaNext = new Date(1970, 1, 2);
    var miliAlDia = fechaNext - fechaUnix; //Calculo el numero de milisegundos en un dia.
    var fechaHoy = new Date();
    var noventaDias = (miliAlDia * 90) + fechaHoy.getTime();
    //Multiplicas los milisegundos por el numero de dias que quieres que pasen, en nuestro caso 90 y sumas los milisegundos que han pasado desde hoy.
    var fechaNoventa = new Date(noventaDias);
    //Creas una nueva fecha con los milisegundos que han pasado desde hoy mas los que han pasado en 90 dias.
    //Laura: el formato de fecha es DD/MM/YYYY
    alert("Tendras que empezar a pagar comisiones en: " + fechaNoventa.toLocaleString().substr(0, 9));
    //Imprimes la fecha de manera local y utilizo el substr para cortar la hora.

}

