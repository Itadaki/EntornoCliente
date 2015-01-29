
/*
 * 
 */
/*
 
 *Autor=Alejandro Montoya Blanco
 *Fecha=26-ene-2015
 *Licencia={project.license}
 *Version=1.0
 *Descripcion=Documento con las funciones para el html
 
 *\
 /* 
 * Copyright (C) 2015 Alejandro Montoya Blanco
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

//Laura: no borra campos, no añade dos líneas nuevas entre campo y campo, código sin formatear!!! Botón derecho Alejandro!!
var cont = 0;
function añadircampo() {// funcion añadir campo

    if (cont < 9) { // Si el contador es menor que nueve se mete en la funcion,
        cont++;       
        var label = document.createElement("label");// creo la etiqueta
        label.setAttribute("id", "etiqueta"+cont); // le pongo el id a la etiqueta
     
        var contenido = document.createTextNode("campo" + cont); // Le asigno el contenido

        
        label.appendChild(contenido); // Le meto el contenido
       var br=document.getElementsByTagName("br"); // cojo los dos br
        
       var ultimo=br[1];// cojo el ultimo br
      
     var formulario=document.getElementById("f1"); // selecciono el formulario
     
     formulario.insertBefore(label,ultimo); // inserto la etiqueta
     
 
    

       var campo = document.createElement("input"); // creo el input
        campo.setAttribute("type", "text");// le doy atributos
        campo.setAttribute("id", "campo"+cont);
        campo.setAttribute("value","");
        formulario.insertBefore(campo,ultimo); // inserto el campo 
        
         var blanco = document.createElement("br");  // creo el espacio en blanco
         
         formulario.insertBefore(blanco,ultimo);
         formulario.insertBefore(blanco,ultimo);            
    }

    if (cont === 9) {
        document.getElementById("b1").disabled = true;
    }
}

function eliminarcampo(){
     var formulario=document.getElementById("f1");
     var label=document.getElementById("label"+cont);
     formulario.removeNode(label);
     cont--;
}
