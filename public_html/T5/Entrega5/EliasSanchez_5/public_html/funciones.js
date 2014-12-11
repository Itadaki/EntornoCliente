/* Autor=Elias Sanchez Arroyo
 * Fecha=05-dic-2014
 * License=Expression proyect is undefined on line 3, column 14 in Templates/ClientSide/javascript.js.
 * Version=1.0
 * Descripcion=
 */
/* 
 * Copyright (C) 2014 Elias Sánchez
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

      /*Funcion de validacion principal en la cual se validan las funciones de todos los campos anteriores*/
        function validarFormulario()
        {   
            validarCamposTexto("nombre");
            validarCamposTexto("apellidos");
            validarFechaNac();
            validarTelefono();
            validarClave();
            validarTitulacion();
            
            if(!(validarCamposTexto("nombre") && validarCamposTexto("apellidos") && validarFechaNac() && validarTelefono() && validarClave() && validarTitulacion()))
            {
                return false;
            }
            else
            {  
                alert('validacion correcta');
            }
            return true;
        }
        /*Funcion para activar el boton Enviar que depende de que los campos estén rellenos*/
        //Laura: no funciona correctamente
        function activarEnviar()
        {
            var enviar = document.getElementById("envio");
            var nombre = document.getElementById("nombre").value;
            var apellidos = document.getElementById("apellidos").value;
            var clave = document.getElementById("clave").value;
            var curriculum = document.getElementById("curriculum").value;
            var telefono = document.getElementById("telefono").value;
            var fecha = document.getElementById("fecha").value;
            var titulacion = document.getElementById("titulacion").value;
            
            if((nombre=='')||(apellidos=='')||(clave=='')||(curriculum=='')||(curriculum==null)||(telefono=='')||(fecha=='')||(titulacion==''))
            {
                return false;
            }
            else
            {
                alert('enviar activado');
                enviar.disabled=false;
            }
            return true;
        }
        /*Funcion para validar la titulación*/
        function validarTitulacion()
        {
            var titulacion = document.getElementById("titulacion");
            if(titulacion.value=='' || titulacion.value==null)
            {
                return false;
            }
            return true;
        }
        /*Funcion para validar los campos de texto, nombre y apellido*/
        function validarCamposTexto(elemento)
        {
            var texto = document.getElementById(elemento).value;
            if((texto=='' || texto == null))
            {
                return false;
            }
            return true;
        }
        /*Funcion para validar la fecha de nacimiento*/
        //Laura: pongo 10/88/1983 y pasa como correcta.
        function validarFechaNac()
        {
            var fecha = document.getElementById("fecha").value;
            
            if(!(/^\d{1,2}\/\d{1,2}\/\d{4}$/).test(fecha))
            {
                return false;
            }
            return true;
        }
        /*Funcion para validar el telefono del usuario*/
        function validarTelefono()
        {
            var telefono = document.getElementById("telefono").value;
            
            if(!(/^([9|6])(\d{8})$/).test(telefono))
            {
                return false;
            }
            return true;
        }
        /*Funcion para validar la clave*/
        function validarClave()
        {
            var clave = document.getElementById("clave").value;
            
            if(!(/^(\d{1})([A-Za-z]{3})(\W{1})(\d{1})$/).test(clave))
            {
                return false;
            }           
            return true;
        }

