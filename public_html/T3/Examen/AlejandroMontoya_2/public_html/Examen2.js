/* Autor=Alejandro Montoya Blanco
 * Fecha=17-oct-2014
 * License=gpl30
 * Version=1.0
 * Descripcion= Archivo con el script donde realizo la validacion de la cuenta e imprimo los datos.
 */
/* 
 * Copyright (C) 2014 Alejandro Montoya Blanco
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
//Laura: esto dentro de la función, existe do-while
var NumCuenta = prompt("Introduce tu numero de cuenta separado por guiones ####-####-##########");//Pido la cuenta

//Laura: falta comentar funciones como os pedí
function ValidarCuenta(){


while (NumCuenta.length !== 23) { //Compruebo en un principio si tiene 23 caracteres con guines incluidos, sino, le pido un numero de cuenta continuamente hasta que meta
                                    // la longitud correcta contando con los guiones
    alert("La cuenta no es correcta numero de correcto valido 1234-4567-33-2222222222");
    NumCuenta = prompt("Introduce tu numero de cuenta separado por guiones ####-####-##########");
}

//Laura: estasa comprobaciones en el do-while. Se puede hacer mucho más eficiente
if ((NumCuenta.split("-")[0].length == 4) && (isFinite(NumCuenta.split("-")[0])) && 
        (NumCuenta.split("-")[1].length == 4) && (isFinite(NumCuenta.split("-")[1])) &&
        (NumCuenta.split("-")[2].length == 2) && (isFinite(NumCuenta.split("-")[2])) && 
        (NumCuenta.split("-")[3].length == 10) && (isFinite(NumCuenta.split("-")[3])))// Valido si todos los campos son numeros y si no ha metido numeros de mas

{
    alert("Datos bancarios: entidad: " + NumCuenta.split("-")[0] + " Oficina :" + NumCuenta.split("-")[1] + 
            " DC: " + NumCuenta.split("-")[2] + " Cuenta :" + NumCuenta.split("-")[3]); // imprimo los datos
}
else
    alert("Ha metido algun caracter no numérico, numero de correcto valido 1234-4567-33-2222222222");}
//Laura: no funciona la función fecha
function Fecha(){
    var fecha=new Date();
    d=fecha.getDay();// saco el dia de hoy
    m=fecha.getMonth();// saco el mes  
    y=fecha.getUTCFullYear();// saco el año
    
    alert((d+"/"+m+"/"+y)+86400000);

}