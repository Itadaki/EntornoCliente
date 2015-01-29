/*
 * Autor = Felix Martinez
 * Fecha = 26-ene-2015
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Js que contiene las funciones correspondientes al HTML Formulario6.html
 */
/* 
 * Copyright (C) 2015 Felix Martinez
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
var contadorId = 2;
function anadir(){
    /**
     * 
     * @description añade una etiquieta label un campo de texto y dos saltos de linea
     */
    
    
    //creamos el tag input y le anadimos atributos
    var campo = document.createElement("input");
    campo.setAttribute("type","text");
    campo.setAttribute("id","c"+contadorId++);
    campo.setAttribute("name","campo");
    
    //guardamos en la variable 'espacio' el ultimo salto de linea para despues insertar debajo la etiqueta
    var espacio = document.getElementsByTagName("br")[document.getElementsByTagName("br").length-1];
    
    espacio.insertAdjacentHTML("afterEnd","<label>Campo"+(contador++)+"</label>");
    
   
    document.getElementById("f1").insertBefore(campo, document.getElementById("b1"));
    
    document.getElementById("b1").insertAdjacentHTML("beforeBegin","<br/><br/>");
    
    activarDesactivarAnadir();
    activarDesactivarBorrar();

}


function borrar(){
    
    /**
     * @description borra la ultima etiqueta label junto a su campo de texto y saltos de linea
     */
    
    
    //eliminamos la etiqueta, el campo y los saltos de linea
    document.getElementById("f1").removeChild(document.getElementsByName("campo")[document.getElementsByName("campo").length-1]);
    document.getElementById("f1").removeChild(document.getElementsByTagName("label")[document.getElementsByTagName("label").length-1]);
    document.getElementById("f1").removeChild(document.getElementsByTagName("br")[document.getElementsByTagName("br").length-1]);
    document.getElementById("f1").removeChild(document.getElementsByTagName("br")[document.getElementsByTagName("br").length-1]);
    
    //guardamos en las variables el numero del ultimo nodo
    contador = document.getElementsByName("campo").length;
    contadorId = document.getElementsByName("campo").length +1;
    
   
    activarDesactivarAnadir();
    activarDesactivarBorrar();
}

//Laura: los comentarios de las funciones antes de la declaración
//Laura:no te hacen falta 2 funciones para controlas la des/habilitación de los botones, fíjate que consultas la misma propiedad para hacerlo
function activarDesactivarAnadir(){
    /**
     * @description activa/desactiva el boton añadir
     */
    if (document.getElementsByName("campo").length >= 10){
       
       document.getElementById("b1").disabled = true;
        
    }else{
        document.getElementById("b1").disabled = false;
    }

}

function activarDesactivarBorrar(){
    /**
     * activa/desactiva el boton borrar
     */
    if (document.getElementsByName("campo").length > 1){
       
       document.getElementById("b2").disabled = false;
        
    }else{
        document.getElementById("b2").disabled = true;
    }
    
}
