/*
 * Autor= Bárbara de Olabarria
 * Fecha= 17-oct-2014
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= Javascript para definir las funciones de pideCuenta() y muestraFecha que se mostrarán en PaginaBanco
 **/
/* 
 * Copyright (C) 2014 Bárbara de Olabarria
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
/*
 * function pideCuenta: en esta función pedimos un número de cuenta que validaremos y luego sacaremos
 */
function pideCuenta() {
    var numeroCuenta;
    var numeroCuenta2;
    //Laura: un do-while, sino la primera vez estás validando sobre vacío
    //Laura:no funciona, cualquier cuenta pasa como correcta
    while ((isNaN(numeroCuenta) === true) && (isFinite(numeroCuenta) === false)) {
        numeroCuenta2=prompt("Introduzca su número de cuenta \n(Formato ####-####-##-##########)");
        numeroCuenta = parseInt(numeroCuenta2);
    }
    //Laura: saca la cuenta entera para cada parte
    var entidad = numeroCuenta2.split('-'[0]);
    var oficina = numeroCuenta2.split('-'[1]);
    var DC= numeroCuenta2.split('-'[2]);
     var ncuenta= numeroCuenta2.split('-'[3]);
  alert("Entidad: " + entidad + "\nOficina: " + oficina + "\nDC: " + DC + "\nCuenta: " + ncuenta);

}
/** 
 * function muestraFecha:con esta función calculamos los milisegundos actuales y sumamos los correspondientes a 90 días para que funcione independientemente del día
 * 
 */
//Laura: botón derecho --> format
function muestraFecha(){
    var fechaActual=new Date();
    var fecha0=new Date(0);
    var milisegundos=fechaActual.getTime()-fecha0.getTime();
    var tiempo=parseInt(1000 * 60 * 60 * 24 * 90);
    var fechaProxima=new Date(milisegundos+tiempo);
    //Laura: formato de fecha tiene que ser DD/MM/YYYY
alert("Tiene que empezar a pagar comisiones el " + fechaProxima.toLocaleString());
    
}
pideCuenta();
muestraFecha();