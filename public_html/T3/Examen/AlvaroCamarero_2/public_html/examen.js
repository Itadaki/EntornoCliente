/*
Autor=Alvaro Camarero Barrio
Fecha=17-oct-2014
Licencia=Expression proyecto is undefined on line 4, column 12 in Templates/ClientSide/javascript.js.
Version=Expression version is undefined on line 5, column 11 in Templates/ClientSide/javascript.js.
Descripcion= Laura: falta y lo anterior undefined
*/
        
/* 
 * Copyright (C) 2014 Alvaro Camarero Barrio
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
/* la funcion te pide un numero de cuenta te comprueba si el formato es valido y luego te da la entidad, oficina, dc,cuenta del numero de cuenta que tu as proporcionado
 * */

//Laura: faltan comentarios de la función
 function cuenta(){
     //Laura: se tiene que solicitar mientras el número de cuenta sea incorrecto
      var numeroCuenta = prompt("introduce el numero de cuenta completo");

            //Laura: y si el usuario introduce más de 23 caracteres? y si introduce los guiones en posiciones incorrectas?
            //Laura: 1234-5678-98-012345678977777 y 1234-5678-9801234567-8977777 dice que es correcto
            cuentaCorrecta = numeroCuenta.split("-");

            var entidad = cuentaCorrecta[0];
            var oficina = cuentaCorrecta[1];
            var dc = cuentaCorrecta[2];
            var cuenta = cuentaCorrecta[3];

            if (numeroCuenta === (entidad + "-" + oficina + "-" + dc + "-" + cuenta)) {
                alert("es un formato de cuenta correcto");
                alert("entidad =" + numeroCuenta.slice(0, 4));
                alert("oficina =" + numeroCuenta.slice(5, 9));
                alert("dc =" + numeroCuenta.slice(10, 12));
                alert("cuenta =" + numeroCuenta.slice(-10));
            } else {
                alert("es un formato de cuenta incorrecto");
                alert("un formato correcto seria: 0000-0000-00-0000000000");
            }

 }
 cuenta();