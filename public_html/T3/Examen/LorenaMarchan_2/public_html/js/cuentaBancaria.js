/*
 Autor=Lorena Marchan
 Fecha=17-oct-2014
 Licencia=gpl30
 Version=1.0
 Descripcion=script JavaScript que solicita al usuario un numero de cuenta, informando
 si el formato del dato introducido es invalido. En caso de que sea correcto se 
 visualiza mediante alert los campos de la cuenta y la fecha en la que tiene que 
 empezar a pagar comisiones con el formato DD/MM/YYYY (90 dias despues de la fecha actual)
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

//Laura: es más correcto hacer 2 funciones, una para la cuenta y otra para la fecha
//variables de cuenta
var numCuenta;
var arCuenta=new Array(4);
var formaCuenta = ["entidad", "oficina", "DC", "cuenta"];

//variables de comprobacion
var tipo;
var tamanyo;

//variables de fecha
var ms=(new Date()- new Date(0))+(90*24*60*60*1000);
var fechaComision = new Date(ms);
var diaComision = ((fechaComision.getDate())<10) ? "0" + (fechaComision.getDate()) : (fechaComision.getDate());
var mesComision = ((fechaComision.getMonth() + 1) < 10) ? "0" + (fechaComision.getMonth() + 1) : (fechaComision.getMonth() + 1);
var anyoComision = fechaComision.getFullYear();

//ejecucion
do {
    //Laura: funciona correctamente, se puede hacer más eficiente
    numCuenta = prompt("intoduce el nº de cuenta");
    arCuenta = numCuenta.split("-");
    
    //comprobacion de que no hay caracteres en cada uno de los elementos del array
    tipo=(isNaN(arCuenta[0]) || isNaN(arCuenta[1]) || isNaN(arCuenta[2]) || isNaN(arCuenta[3]))?false:true;   
    if(!tipo){
        alert("has introducido "+numCuenta+", no puedes introducir caracteres");
    }
    
     //comprobacion de longitud adecuada de cada uno de los elementos del array
    tamanyo=((arCuenta[0].length) !== 4 || (arCuenta[1].length) !== 4 || (arCuenta[2].length) !== 2 || (arCuenta[3].length) !== 10)?false:true;    
    if(!tamanyo){
        alert("has introducido "+numCuenta+", te faltan numeros");
    }
    
} while (!tipo || !tamanyo);

for (var i = 0; i < (formaCuenta.length); i++) {
    alert("nº " + formaCuenta[i] + ": " + arCuenta[i]);
}
alert("Tendrá que empezar a pagar comisiones el dia " + diaComision + "/" + mesComision + "/" + anyoComision);