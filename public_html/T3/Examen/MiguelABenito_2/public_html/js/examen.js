/*
 *Autor= Miguel A Benito
 *Fecha= 17-oct-2014
 *Licencia= gpl30
 *Version= 1.0
 *Descripcion= javascript que valida una cuenta corriente, y la muestra al usuario separando sus campos (entidad, oficina, dc, cuenta)
 * y funcion que muestra la fecha de primeras comisiones (90 dias a partir del ejecutado)
 */


/* 
 * Copyright (C) 2014 Saphirum
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
 * nombre: cuenta
 * variables: datosCuenta, datosVal, entidad , oficina, dc , cuenta
 * return: comprobacion de si la cuenta introducida es correcta y la muestra al usuario separando sus campos (entidad, oficina, dc, cuenta)
 * fallos:
 */
function cuenta() //Laura: correcta, se puede hacer más eficiente
{
    var datosCuenta = prompt("introduce el nº de la cuenta bancaria en formato entidad oficina dc cuenta separados por guiones");
    var datosVal;

    do {
        //compruebo si el tamaño es correcto
        if (datosCuenta.length !== 23) {
            datosVal = false;
            var datosCuenta = prompt("datos introducidos incorrectos: un numero de cuenta valido seria 1234-1234-12-1234567890");
        } else {
            //paso datos a variables para guardar la informacion y preparar la validacion (guion)
            var entidad = datosCuenta.substr(0, 4);
            var oficina = datosCuenta.substr(5, 4);
            var dc = datosCuenta.substr(10, 2);
            var cuenta = datosCuenta.substr(13, 10);
            var guion = datosCuenta.charAt(4) + datosCuenta.charAt(9) + datosCuenta.charAt(12);
//validacion de la cuenta
            if (isFinite(entidad) && isFinite(oficina) && isFinite(dc) && isFinite(cuenta) && guion === "---") {
                alert("entidad: " + entidad + " Oficina: " + oficina + " DC: " + dc + " Cuenta: " + cuenta);
                var datosVal = true;
            } else {
                datosVal = false;
                var datosCuenta = prompt("datos introducidos incorrectos: un numero de cuenta valido seria 1234-1234-12-1234567890");
            }
        }
    } while (datosVal !== true)

    /**
     * nombre: fechaComisiones
     * variables: fecha, diaComision (fecha guarda el dia a pagar comisiones)(diaComision convierte a String la fecha)
     * return: alert de una fecha 90 dias despues del actual
     * fallos:
     */
    function fechaComisiones() //Laura; fecha en formato DD/MM/YYYY
    {
        var fecha = new Date();
        fecha.getDate(+90);

        var diaComision = fecha.toTimeString();
        alert(diaComision);
    }






} //Laura: esta es la llave de cierre de tu función cuenta, fechaComisiones como si no existiese




















