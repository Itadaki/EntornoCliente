/*
Autor=Héctor Espinosa Torres
Fecha=26-ene-2015
Licencia=gpl30
version=1.0
Descripcion= en este archivo js estan las funciones necesarias para poder agregar campos a un formulario y eliminarlos.
*/
/* 
 * Copyright (C) 2015 Héctor Espinosa Torres
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

html=document.documentElement;
body= html.lastChild;
formulario= body.childNodes[1];

contCampos=1;

botonAgregar=document.getElementById("b1");
botonAgregar.setAttribute("onclick","agregar();");

botonBorrar=document.getElementById("b2");
botonBorrar.setAttribute("onclick","eliminar();");
/**
 * @description En esta funcion se agregan campos al formulario hasta un maximo de 10
 * @returns {undefined}
 */
function agregar(){
    /*Con este controlador habilitamos y desabilitamos los botones seggun sea necesario*/
    //Laura: el campo añadir no se deshabilita después de añadir el décimo campo
    //LAura: tienes el código de des/habilitación de los botones repetido--> función
    if(contCampos===10){
        botonAgregar.disabled=true;
    }else{
         botonAgregar.disabled=false;
        if(contCampos===0){
        botonBorrar.disabled=true;
    }else{
       botonBorrar.disabled=false; 
    }
    
    /*Aqui se crea la etiqueta para el nuevo campo*/
   
    var etiqueta=document.createElement("label");
    var contenido=document.createTextNode("campo"+contCampos);
    etiqueta.appendChild(contenido);
    
    /*Aqui se crea el nuevo campo de texto*/
    var campo=document.createElement("input");
    campo.setAttribute("type","text");
    campo.setAttribute("id","c"+(contCampos));
    campo.setAttribute("name","campo");
    
    var nuevaLinea=document.createElement("br");
    
    /*Aqui metemos la etiqueta y el campo de texto en el formulario*/
   
   //Laura: botón derecho --> format
    botonAgregar.insertAdjacentHTML("beforeBegin",etiqueta.outerHTML);
   botonAgregar.insertAdjacentHTML("beforeBegin",campo.outerHTML);
    botonAgregar.insertAdjacentHTML("beforeBegin",nuevaLinea.outerHTML);
    botonAgregar.insertAdjacentHTML("beforeBegin",nuevaLinea.outerHTML);
     contCampos++;
}

}
/**
 * @description Con esta funcion se elimina el ultimo campo del formulario hasta que solo quede uno
 * @returns {undefined}
 */
function eliminar(){
    contCampos--;
     if(contCampos===10){
        botonAgregar.disabled=true;
    }else{
        botonAgregar.disabled=false;
        if(contCampos===1){
        botonBorrar.disabled=true;
    }else{
       botonBorrar.disabled=false; 
    
    }
    }
    /*Aqui eliminamos el ultimo campo de texto*/
    var campos=formulario.getElementsByTagName("input");
   formulario.removeChild(campos[campos.length-3]);
   /*campos.length-1 ycampos.length-2 son los botones de añadir y borrar, por eso empezamos en -3*/
 //Laura: bot´ton derecho--> format
 /*Aqui eliminamos la ultima etiqueta*/
     var etiquetas=formulario.getElementsByTagName("label");
   formulario.removeChild(etiquetas[etiquetas.length-1]);
   /*Aqui eliminamos los saltos de linea*/
   var saltos=document.getElementsByTagName("br");
  formulario.removeChild(saltos[saltos.length-1]);
  formulario.removeChild(saltos[saltos.length-2]);
  
  
    }
