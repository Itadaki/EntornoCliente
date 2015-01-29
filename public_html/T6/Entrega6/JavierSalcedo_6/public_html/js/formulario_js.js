/*
 * Autor=Javier Salcedo
 * Fecha=26-ene-2015
 * Licencia=gpl30
 * Version=1.0
 * Descripcion=JavaSript que añade y borra texto y campos de texto de un formulario
 */


/* 
 * Copyright (C) 2015 Javier Salcedo
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

var cont = 0;
/** 
 * @name añadir
 * @description función que añade tags label y input al pulsar el boton añadir campo del formulario
 */
function añadir() {

    //////variables a usar//////
    var numeros = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
    var label = document.createElement("label");
    var texto = document.createTextNode("Campo" + numeros[cont]);
    var input = document.createElement("input");
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");
    var boton1 = document.getElementById("b1");
    var boton2 = document.getElementById("b2");

    //////meter texto como hijo de label//////
    label.appendChild(texto);

    //////poner encima de los botones label, campo y los br//////
    boton1.insertAdjacentHTML("beforebegin", label.outerHTML);
    boton1.insertAdjacentHTML("beforebegin", input.outerHTML);
    boton1.insertAdjacentHTML("beforebegin", br1.outerHTML);
    boton1.insertAdjacentHTML("beforebegin", br2.outerHTML);

    cont++;

    //////desabilitar boton añadir campo y boton borrar campo//////
    var n_label = document.getElementsByTagName("label").length;

    if (n_label > 9) {
        boton1.setAttribute("disabled", true);
    }
    
    if (n_label >= 0) {
        boton2.removeAttribute("disabled");
    }
    
}

/**
 * @name añadir
 * @description función que borra tags label y input al pulsar el boton borrar campo del formulario
 */

//Laura: borra el campo 0 también, debería dejar un campo siempre
function borrar() {

    //////variables a usar//////
    var n_label = document.getElementsByTagName("label").length;
    var n_input = document.getElementsByTagName("input").length;
    var n_br = document.getElementsByTagName("br").length;
    var ultimoLabel = document.getElementsByTagName("label")[n_label - 1];
    var ultimoInput = document.getElementsByTagName("input")[n_input - 3];
    var ultimoBr = document.getElementsByTagName("br")[n_br - 1];
    var penultimoBr = document.getElementsByTagName("br")[n_br - 2];
    var formulario = document.getElementById("f1");
    var br1 = document.createElement("br");
    var br2 = document.createElement("br");

    //////borrar ultimo label, input y los dos ultimos br//////
    formulario.removeChild(ultimoLabel);
    formulario.removeChild(ultimoInput);
    formulario.removeChild(ultimoBr);
    formulario.removeChild(penultimoBr);
    //Laura: después de borrar también hay que controlar des/habilitar botones

}



