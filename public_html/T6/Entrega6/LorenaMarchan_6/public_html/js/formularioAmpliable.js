
/*
 Autor=Lorena Marchan
 Fecha=26-ene-2015
 Licencia=gpl30
 Version=1.0
 Descripcion=Documento JavaScript que contiene las funciones responsables de añadir, 
 borrar, habilitar y desahilitar campos del formulario que se encuentra 
 en el documento HTML forumarioAmpliable.html
 */

/* 
 * Copyright (C) 2015 Lorena Marchan
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
 * @name añadir
 * @returns {undefined}
 * @argument {undefined}
 * @description Funcion que permite añadir dos saltos de linea, la etiqueta label y el campo de texto despues del ultimo campo de texto.
 */

function añadir() {
    var inputs = document.getElementsByName('campo');
    var ultimo = inputs[inputs.length - 1];
    var texto = '<br><br><label>Campo' + inputs.length + ' </label><input type="text" id="c' + (inputs.length + 1) + '" name="campo">';
    ultimo.insertAdjacentHTML('afterend', texto);
    habDesab(inputs);

}

/**
 * @name borrar
 * @returns {undefined}
 * @argument {undefined} 
 * @description Funcion que permite borrar los dos saltos de linea, la etiqueta label y el campo de texto que sean ultimos.
 */
function borrar() {
    //Laura: comenta el código
    var inputs = document.getElementsByName('campo');
    var labels = document.getElementsByTagName('label');
    var brs = document.getElementsByTagName('br');
    var ultimo = inputs[inputs.length - 1];
    var ultimo_label = labels[labels.length - 1];
    var ultimo_br = brs[brs.length - 1];
    var penultimo_br = brs[brs.length - 2];
    ultimo.parentNode.removeChild(ultimo);
    ultimo_label.parentNode.removeChild(ultimo_label);
    ultimo_br.parentNode.removeChild(ultimo_br);
    penultimo_br.parentNode.removeChild(penultimo_br);
    habDesab(inputs);
}

/**
 * @name habDesab
 * @returns {undefined}
 * @argument {objectHTML} inputs
 * @description Funcion que deshabilita el boton añadir si hay mas de 10 campos de texto y lo habilita si hay menos, 
 *              y deshabilita el boton borrar si solo queda el campo0 y lo habilita si hay mas.
 */
function habDesab(inputs) {
    //Laura: lo puedes hacer más simple sin if-else
    //añadir.disabled = !(camposActuales < MAX_CAMPOS);
    //borrar.disabled = !(camposActuales > MIN_CAMPOS);
    if (inputs.length >= 10) {
        document.getElementById('b1').disabled = true;
    }
    else {
        document.getElementById('b1').disabled = false;
    }
    if (inputs.length > 1) {
        document.getElementById('b2').disabled = false;
    }
    else {
        document.getElementById('b2').disabled = true;
    }
}