/*
 Autor=Héctor Espinosa Torres
 Fecha=17-oct-2014
 Licencia=gpl30
 version=1.0
 Descripcion= En este documento se pide al usuario un numero de cuenta
 y se realizan las comprobaciones necesarias para saber si el numero introducido 
 es valido o no.
 */
/* 
 * Copyright (C) 2014 Héctor Espinosa Torres
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

//Laura: tienes que hacer 2 funciones, una para la cuenta otra para la fecha, son tareas que no tienen nada que ver
//Laura: botón derecho --> format
do{
var numCuenta = prompt("introduce un número de cuenta bancaria");

var comprobarNumero;// con ete ccomprobaremos que los numeros se hayan introducido bien.
var comprobarSeparador;//comprueba los separadores.

//Laura: usar un case para esto y recorrer toda la cadena es muy ineficiente, y si tuviésemos una longitud de 200 caracteres?
//Laura: si introduzco 12345-678-98-0123456789 pasa como correcta
for (var i = 0; i < numCuenta.length; i++) {

    switch (i) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 5:
        case 6:
        case 7:
        case 8:
        case 10:
        case 11:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            if (parseInt(numCuenta.charAt(i)) >= 0 && parseInt(numCuenta.charAt(i)) < 10) {//en este if comprobamos que se han introducido numeros en las posiciones correctas
                comprobarNumero = true;
            } else {
                comprobarNumero = false;
                break;
            }
            break;
        case 4:
        case 9:
        case 12:
            if (numCuenta.charAt(i) === '-') {// aqui se comprueba que los separadores esten colocados correctamente
                comprobarSeparador = true;
            } else {
               comprobarSeparador = false;
                break;
            }
           break; 
        default:
            alert("error informático");
            break;

    }
}
if (comprobarNumero === true && comprobarSeparador === true) {

    alert("entidad: "+numCuenta.substr(0,4)+"\n"+//en este alert se muestra num de entidad, de oficina, de dc y de ccuenta
            "oficina: "+numCuenta.substr(5,4)+"\n"+
            "DC: "+numCuenta.substr(10,2)+"\n"+
            "Cuenta: "+numCuenta.substr(13,10)+"\n");
    //Laura: el cálculo de la fecha no es correcto, mezclas fecha con milisegundos, y pedia formato DD/MM/YYYY
    alert("tiene que empezar a pagar comisiones el dia: "+new Date()+(90*24*60*60*1000));
    
}else{alert("debes introducir un numero de cuenta correcto. un ejemplo:\n\n\
                1234-5678-90-1234567890");
            
}
}while(comprobarNumero === false && comprobarSeparador === false);


