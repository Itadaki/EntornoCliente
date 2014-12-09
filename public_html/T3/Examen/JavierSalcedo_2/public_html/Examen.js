/*
 * Autor=Javier Salcedo
 * Fecha=17-oct-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion= Script javascript que pide un numero de cuenta a un usuario, comprueba que a introducido
 *               un numero de cuenta valido y le dice en que fecha tiene que empezar a pagar comisiones.
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

//Laura: dentro de la función
var numero = prompt("introduce un numero de cuenta");


/* funcion que comprueba que el numero de cuenta introducido es correcto y le dice que tiene que empezar a pagar
 * comisiones cuando pasen 90 dias de la fecha de hoy*/
//Laura: falta comentar la función comoos pedí
function comprobar() {

    //Laura: ¿qué es?:isNaN(numero[0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])) --> siempre es true;
    //Laura: abcd-5678-98-0123456789 tu código dice que es correcto
    //Laura: en este if tienes que poner || siempre no &&, piensa lo que estás haciendo
    if (isNaN(numero[0, 1, 2, 3, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]) && ((numero[4]) != "-") &&
            ((numero[9]) != "-") && ((numero[12]) != "-") || (numero.length != 23)) { //comprueba si el lo que a introducido el usuario es un numero, 
        // con las separaciones correspondientes y su longitud

        alert("no es un numero de cuenta correcto\n\
                              Ej:1234-5678398-0123456789");

    }


    else {
        alert("Numero de cuenta bien eintroducido");


        //slice --> Devuelve un nuevo array con un subconjunto de los elementos del array según los índices que se le pasen.

        var entidad = numero.slice(0, 4); // para imprimir los 4 primeros numeros
        var oficina = numero.slice(5, 9); //para imprimir los numeros del 6 al 9 (6 y 9 incluidos)
        var DC = numero.slice(10, 12); //para imprimir los numeros del 11 al 12 (11 y 12 incluidos)
        var cuenta = numero.slice(13, 24);  //para imprimir los nuemros del 14 al 23 (ambos incluidos)


        alert("Entidad:" + entidad + "\n\Oficina:" + oficina + "\n\DC:" + DC + "\n\Cuenta:" + cuenta);

        //calculo de fecha

        //Laura: la parte de la fecha no funciona
        var fecha2 = new Date(1413998674071); //suma de los milisegundos transcurridos desde la época unix + 90 dias pasados a milisegundos


        var dia = fecha2.getDate();
        var mes = fecha2.getMonth();
        var año = fecha2.getFullYear();

        /* milisegundos trascurridos desde la época unix 1413532114071
         90 dias = 2160 horas
         2160 horas =129600 minutos 
         129600 minutos = 7776000 seg 
         7776000 segundos = 466560000 milisegundos*/


        //Laura: el formato de la fecha es DD/MM/YYYY
        alert("fecha en la que tiene que empezar a pagar comisiones:" + dia + "/" + mes(+1) + "/" + año);


    }






}
comprobar();