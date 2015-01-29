
/*
 Autor=Paul Lozano Cruzado 
 Fecha=26-ene-2015
 Licencia=gpl30
 Version=1.0
 Descripcion= Laura: sin rellenar
 */

/* 
 * Copyright (C) 2015 Paul Lozano Cruzado 
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

var n_campos = 0;

/**
 * Funcion para añadir etiquetas y campos 
 * al formulario que tenemos. Esta funcion esta
 * echa para poder añadir unicamente 10 campos
 */
function añadir() {
    //Laura: cada campo se debe añadir justo debajo del anterior, encima de los botones, hay que añadir hasta el campo número 9
    if (n_campos < 10) {

        n_campos++;

        document.getElementById("b2").disabled = false;

        var formulario = document.getElementById("f1");

        var label = document.createElement("label");
        label.appendChild(document.createTextNode("Campo" + n_campos));

        var input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "c1");
        input.setAttribute("name", "campo");

        var br = document.createElement("br"); //Laura: 2 br entre un campo y el siguiente

        formulario.appendChild(br);
        formulario.appendChild(label);
        formulario.appendChild(input);

    } else {
        //Laura: la des/habilitación del bot´ton no funciona bien, tengo que pulsarle para que se deshabilite
        document.getElementById("b1").disabled = true;
    }
}

//Laura: sin comentar
function borrar() {
    
    n_campos--;
    
    if (n_campos >= 0){
        
        document.getElementById("b1").disabled = false;
    
        var n_label = document.getElementsByTagName("label").length;
        var label = document.getElementsByTagName('label')[n_label-1];

        document.getElementsByTagName("form")[0].removeChild(label);

        var n_input = document.getElementsByTagName("input").length;
        var input = document.getElementsByTagName('input')[n_input-1];

        document.getElementsByTagName("form")[0].removeChild(input);
        
        var n_br = document.getElementsByTagName("br").length;
        var br = document.getElementsByTagName('br')[n_br-1];

        document.getElementsByTagName("form")[0].removeChild(br);
        
    }else{
        //Laura: la des/habilitación del bot´ton no funciona bien, tengo que pulsarle para que se deshabilite
        document.getElementById("b2").disabled = true;
    }
}
