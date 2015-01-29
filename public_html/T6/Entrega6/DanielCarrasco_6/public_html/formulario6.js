
/*
 <!DOCTYPE html>
 <!--
 Autor = Daniel Carrasco Barcena
 Fecha = 26-ene-2015
 Licencia = gpl30
 Version = 1.0
 Descripcion = Laura: falta
 -->
 */


/* 
 * Copyright (C) 2015 Daniel Carrasco Barcena
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


var contador = 1;

/**
 * Metodo para añadir filas en el formulario
 * 
 */

function añadir() {



    var nombre = document.createElement("label");

    var texto = document.createElement("input");



    var interlineado = document.getElementsByTagName("br")[document.getElementsByTagName("br").length - 1];


    interlineado.insertAdjacentHTML("afterend", nombre.innerHTML = "<label> Campo" + (contador++) + "</label>");

    document.getElementById("f1").insertBefore(texto, document.getElementById("b1"));

    document.getElementById("b1").insertAdjacentHTML("beforebegin", "<br></br>");


    if (contador > 9) {

        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = false;


    } else {

        document.getElementById("b1").disabled = false;
        document.getElementById("b").disabled = true;
    }



}

/**
 * Funcion para borrar el último elemento de la lista
 */

//Laura: borras al revés, y dejas el campo 9, cuando vuelves a añadir empieza por el 2
function borrar() {



    var formulario = document.getElementsByTagName("form")[0];

    var label = document.getElementsByTagName("label")[0];

    var input = document.getElementsByTagName("input")[0];


    formulario.removeChild(label);
    formulario.removeChild(input);

//Laura: no uses el espaciado en exceso


    if (contador > 2) {


        document.getElementById("b2").disabled = false;
        document.getElementById("b1").disabled = true;
        contador--;



    } else {

        document.getElementById("b1").disabled = false;
        document.getElementById("b2").disabled = true;
    }

}






