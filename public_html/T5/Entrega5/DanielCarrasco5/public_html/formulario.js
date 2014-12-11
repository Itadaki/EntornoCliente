
/*
<!DOCTYPE html>
<!--
Autor = Daniel Carrasco Barcena
Fecha = 05-dic-2014
Licencia = gpl30
Version = 1.0
Descripcion =
-->
*/
        
        
/* 
 * Copyright (C) 2014 Daniel Carrasco Barcena
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

//Laura: por qué obtener valores al cargar el document
var fecha = document.getElementById("fecha"). value;
var telefono = document.getElementById("telefono").value;
var clave  = document.getElementById("clave").value;
var nombre = document.getElementById("nombre").value;
var apellidos = document.getElementById("apellidos").value;
var seleccion = document.getElementById("titulacion");
var fichero = document.getElementById("file").value;

/**
 * Funcion para validar todos los campos del formulario
 */

//Laura: botón derecho format
function validar() {
   
    
    if (!validarFecha() || !validarMovil() || !validarClave() || !validarNombre() || !validarApellidos() || !validarSeleccion() || !validarFichero()) {
        
        return false;
        
    }
    //activarDesactivarCampo();
    alert("La validacion  se ha realizado con exito. Gracias");
    return true;
    
    
}

/**
 Funcion para validar la fecha del formulario
 */
function validarFecha() {

//Laura: 11/01/1900 me dice que no es correcta y me recarga el formulario y lo vacía
    
    var fecha = document.getElementById("fecha"). value;
    
    var expresion = /^[1-31]{1,2}\/[1-12]{1,2}\/d^(4)$/;
         
         if (!expresion.test(fecha)) {
             alert("la fecha no es correcta");
           
             
             return false;
         }
            alert("la fecha es correcta, gracias");
            return true;
            
            }
       

/**
 * Funcion para validar el telefono del formulario
 */
function validarMovil() {
    
     
                var telefono = document.getElementById("telefono").value;
                
                if(!(/^9|6\d{8}$/.test(telefono))){
                    alert("telefono incorrecto");
                    return false          
                }
            }
            

/**
 Funcion para validar la clave del formulario
 */
function validarClave() {
    
    
    
                var clave  = document.getElementById("clave").value;
                
                if(!(/^\d\D{3}\W\d/.test(valor))){
                    alert("clave incorrecta");
                    return false;
                }
                
                return true;
            }
   
/**
 * Funcion para validar el nombre del formulario
 */
function validarNombre() {
    
    
                var nombre = document.getElementById("nombre").value;
                if (nombre == null || nombre.length == 0) {
                    alert("El campo nombre no puede estar vacío");
                    return false;
                }
                return true;
            }
            
/**
 * Funcion para validar el apellido del formulario
 */
    
function validarApellidos() {
    
    
                var apellidos = document.getElementById("apellidos").value;
                if (apellidos == null || apellidos.length == 0) {
                    alert("El campo apellidos no puede estar vacío");
                    return false;
                }
                return true;
            }

    
    
/**
 * Funcion para validar la seleccion en el formulario
 */
function validarSeleccion() {
    
    
    var seleccion = document.getElementById("titulacion");
    var opcionseleccionada = seleccion.selectedIndex;
    
    if (opcionseleccionada === 0) {
        
        alert ("debe seleccionar una opcion")
        return false
        
    } else {
        
        return true;
     
        }

}

/**
 * Funcion para activar el campo enviar
 */
//Laura: relleno todos los campos y el botón no se habilita
function activarDesactivarCampo() {
    
    
    
    if (fecha===null ){
        document.getElementById("envio").disabled = true;
        
    } else {
        
        document.getElementById("envio").disabled = false;
    }

   
}

/**
 * Funcion para validar el fichero del formulario
 */
    
   function validarFichero() {
                var fichero = document.getElementById("file").value;
                if (fichero === null) {
                    alert("Debe subir un fichero");
                    return false;
                }
                return true;
            }
    
   