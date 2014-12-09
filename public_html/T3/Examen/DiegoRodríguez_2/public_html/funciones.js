/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 17-oct-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Contiene funciones de gestión bancaria
 */

/* 
 * Copyright (C) 2014 Diego Rodríguez Suárez-Bustillo
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

/**
 * @description Calcula una fecha en el tiempo a partir de hoy
 * @argument {Integer} dias Días a partir de la fecha de hoy (+ o -)
 * @returns {Date}
 */
function calcularFecha(dias) {
    var hoy = new Date().getTime();
    var fecha = new Date((hoy + 86400000 * dias));
    return fecha;
}

/**
 * @description Pide una cuenta al usuario, la valida, muestra sus datos <br>
 *              y calcula la fecha de cobro
 */
function pedirCuenta() {
    //Numero de digitos de cada parte de la cuenta
    var digitos = [4, 4, 2, 10];
    var separador = '-';
    var formato = '####-####-##-##########';
    var frase = 'Introduce tu número de cuenta\n(Formato '+formato+')';
    var noContinuar;

    do {
        noContinuar = false;

        //Entrada de cuenta
        var entrada = prompt(frase);

        //Array de la cuenta
        var cuenta = entrada.trim().split(separador);

        //Si el array tiene el numero adecuado de elementos
        if (cuenta.length === digitos.length) {
            //Para cada elemento
            for (var i = 0; i < cuenta.length; i++) {
                //El elemento NO es un numero -o- NO tiene la cantidad de digitos adecuada
                if (!isFinite(cuenta[i]) || cuenta[i].length !== digitos[i]) {
                    noContinuar = true;
                    frase = 'Error de formato en el ' + (i + 1) + 
                            'º numero.\nDebe seguir este formato:\n'
                            +formato;
                }
            }
        }
        //El array no tiene el numero adecuado de elementos
        else {
            noContinuar = true;
        }
    } while (noContinuar);

    //Mostrar datos
    var nombres = new Array('Entidad', 'Oficina', 'DC', 'Cuenta');
    var salida = '';
    for (var i = 0; i < nombres.length; i++) {
        salida += nombres[i] + ': ' + cuenta[i] + '\n';
    }
    alert(salida.trim());

    //Fecha de comision
    var fechaCobro = calcularFecha(90);
    var dia = formatear(fechaCobro.getUTCDate());
    var mes = formatear(fechaCobro.getMonth()+1);
    var año = formatear(fechaCobro.getFullYear());
    
    alert("Fecha de comienzo del pago de comisiones:\n" + 
            dia+'/'+mes+'/'+año);
}
/**
 * @description Formatea numeros a dos digitos
 * @param {type} numero Numero a formatear
 * @returns {String}
 */
function formatear(numero){
    var s = ((numero<10)?'0':'')+numero;
    return s;
}