
/*
 Autor=Paul Lozano Cruzado 
 Fecha=17-oct-2014
 Licencia=gpl30
 Version=1.0
 Descripcion=Mediante este programa calcularemos lo siguiente:
             validaremos la cuenta, mostraremos datos y calcularemos una fecha.
 */

/* 
 * Copyright (C) 2014 Paul Lozano Cruzado 
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

//Laura: esto dentro de la función en un do-while
var numCuenta = prompt("Introduce tu numero de cuenta\n(####-####-##-##########) :");

//Laura: ¿y si introduce más números, caracteres o los - en otras posiciones?
var digitosCuenta = numCuenta.split('-');

var longitud = digitosCuenta.length;

/**
 * Funcion para comprobar que el numero introducido es
 * numerico y asegurarnos que cumple con el formato correcto
 */
//Laura: faltan comentarios de funciones como os pedí
//Laura: no funciona correctamente
function cuentaBancaria() {

    var entidad = new Array(3);
    var oficina = new Array(3);
    var dc = new Array(1);
    var cuenta = new Array(9);
    
    //Comprobamos que todas los caracteres introducidos son numeros
    for (var i = 0; i < longitud; i++) {
        
        if (isFinite(digitosCuenta[i])) {
        }

        else {

            alert("No es un caracter valido!");
        }
    }
}

/**
 * Funcion para mostrar los datos de la cuenta bancaria
 * mediante un for que ira recorriendo los elementos
 * del String.
 */

//Laura: Paul te has liado 
function mostrarCuenta() {

    //Primero convertimos el array en un String para poder usar los metodos
    var cuenta = digitosCuenta.toString();
    //Creamos una variable mensaje, para guardar el mensaje correcto para cada caso
    var mensaje;

    for (var i = 0; i < longitud; i++) {

        if (i === 0) {

            mensaje = "Numero de entidad :";
        }

        else if (i === 1) {

            mensaje = "Oficina :";
        }

        else if (i === 2) {

            mensaje = "DC :";
        }

        else if (i === 3) {

            mensaje = "Numero de cuenta :";
        }

        //Finalmente concatenamos el mensaje con la parte correspondiente a la cuenta
        alert(mensaje.concat(' ', cuenta.split(',')[0]));
    }
}

/**
 * Funcion para calcular la fecha de primer pago de las comisiones
 * sabiendo cuanto segundos tiene un dia, calcularemos los de 90
 * y se los aplicaremos a la fecha actual.
 */

function fechaPago() {

    var fechaActual = new Date();

    var dia1 = new Date(2010, 1, 1);
    var dia2 = new Date(2010, 1, 2);

    var diferenciaDia = ((dia2 - dia1) * 90);
    //Laura: tendrás que sumar los milisegundos de 90 días, no se puede mezclar fechas con números
    var fechaPago = new Date(diferenciaDia - fechaActual);
    //Laura: el formato es DD/MM/YYYY
    alert("Fecha de primer pago de comisiones: \n" + fechaPago.toLocaleDateString());
}

