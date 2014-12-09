/* Autor=Elias Sanchez Arroyo
 * Fecha=17-oct-2014
 * License=Expression proyect is undefined on line 3, column 14 in Templates/ClientSide/javascript.js.
 * Version=1.0
 * Descripcion= Programa con tres funciones que valida un numero de cuenta dado para obtener su banco y la fecha de pago de comisiones
 */
/* 
 * Copyright (C) 2014 Elias Sánchez
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

/*Nombre funcion: validacionCuenta
 *Variables: num_cuenta, array_cuenta, validacion
 *Descripción: valida un numero de cuenta introducido por el usuario, si no es valido, informará a este y le solicitará que lo introduzca de nuevo*/

//Laura: funciona correctamente, puede hacerlo más eficiente
function validacionCuenta()
{
    do
    {
        var num_cuenta = prompt('Introduzca un numero de cuenta: ');
        array_cuenta = num_cuenta.split('-');
        
        /*Comprueba si el array es numerico y tiene longitud 4*/
        if ((array_cuenta.length === 4)&&(!isNaN(array_cuenta[0]))&&(!isNaN(array_cuenta[1]))&&(!isNaN(array_cuenta[2]))&&(!isNaN(array_cuenta[3])))
        {
            /*Comprueba si la longitud de cada uno de los elementos del array es la correcta para el numero de cuenta, de ser asi, la variable validacion sera true
             *y en ese caso ejecutará las funciones obtenerBanco y fechaComision, de no ser así, solicitará de nuevo el numero de cuenta*/
            ((array_cuenta[0].length === 4) && (array_cuenta[1].length === 4) && (array_cuenta[2].length === 2) && (array_cuenta[3].length === 10)) ?
                    validacion = true : validacion = false;
            (validacion !== true) ? alert('El numero de cuenta introducido es incorrecto') : obtenerBanco(), fechaComision();
        }
        else
        {
            validacion = false;
            alert('El numero de cuenta debe tener cuatro entradas numericas');
        }
    }
    while (validacion !== true);

}

/*Nombre funcion: obtenerBanco*/
/*Variables: array_banco,array_cuenta*/
/*Descripción: Muestra por alert las entidades del numero bancario*/

function obtenerBanco()
{
    /*Recorre con un bucle for comparando los elementos del array_banco con los de la cuenta para que correspondan*/
    var array_banco = new Array('Entidad', 'Oficina', 'DC', 'Cuenta');
    for (var i = 0; i < array_banco.length; i++)
    {
        alert('El numero de ' + array_banco[i] + ' es: ' + array_cuenta[i]);
    }
}

//Laura: Esta función muestra la fecha de hoy no la de dentro de 90 días.
function fechaComision()
{
    var fecha_pago = new Date();
    var dia = fecha_pago.getDate();
    var mes = fecha_pago.getMonth();
    switch (mes)
    {
        case 1,3,5,7,8,10,12:
            dia=dia+2;
            mes=mes+3;
            break;
        case 2,4,6,9,11:
            dia++;
            mes=mes+3
            break;
    }
    alert(dia+'/'+mes+'/'+fecha_pago.getFullYear());
}

validacionCuenta();