/*
 * Autor = Félix Martínez Álvaro
 * Fecha = 17-oct-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = El js contiene dos funciones. La primera para pedir y visualizar el numero de cuent y la segunda para calcular la fecha dentro de 90 dias
 */
/* 
 * Copyright (C) 2014 Félix Martínez Álvaro
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
//funcion que pide el numero de Cuenta y si el formato es correcto visualiza sy entidad, oficina,dc, cuenta y ademas la fecha para empezar a pagar comisiones
    var cadena = prompt("Introduzca su numero de cuenta:");
    //Laura: hay que pedir la cuenta mientras sea incorrecta
    var numCuenta = cadena.split(""); // convierte cadena en array //Laura: ¿para qué hace esto?
    
    //Laura: 1234-cccc-bb-012345678a es correcto para tu programa
    if (numCuenta.slice(4, 5) == '-' && numCuenta.slice(9, 10) == '-' && numCuenta.slice(12, 13) == '-' && numCuenta.length === 23) { //comprueba si es valido
        var entidad = numCuenta.slice(0, 4);
        var oficina = numCuenta.slice(5, 9);
        var dc = numCuenta.slice(10, 12);
        var cuenta = numCuenta.slice(13, 23);

        alert("Su entidad es:" + entidad.join(""));
        alert("Su oficina es :" + oficina.join(""));
        alert("Su dc es:" + dc.join(""));
        alert("Su cuenta es:" + cuenta.join(""));
        
        fechaComisiones();
        
    } else {
        alert("El numero de cuenta no es correcto. Ejemplo: 1234-1234-12-1234567891");
        numeroCuenta();
    }


}
//Laura: falta comentar funciones como os pedí
function fechaComisiones(){
    //funcion que calcula la fecha dentro de 90 dias
    //Laura: la fecha en formato DD/MM/YYYY
    var hoy = new Date(new Date().getTime()+(86400000*90)); //calculo fecha mas 90 dias
     
    alert("Tendra que empezar a pagar comisiones el : "+hoy.toDateString());
}
