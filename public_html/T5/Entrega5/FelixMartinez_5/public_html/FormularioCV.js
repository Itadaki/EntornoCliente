/*
 * Autor = Félix Martínez Álvaro
 * Fecha = 05-dic-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = JS que contiene las funciones del FormularioCV.html
 */
/* 
 * Copyright (C) 2014 Félix Martínez Álvaro
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
 * Decripcion: valida las funciones
 * @returns {Boolean}
 */
function validar() {

    if (!validarNombre() || !validarApellido() || !validarFechaNacimiento() || !validarTelefono() || !validarCV() || !validarTitulacion() || !validarClave()) {
        return false;
    }

    return true;
}

/**
 * Descripcion: comprueba que los campos esten rellenados
 * @returns {undefined}
 */
function camposObligatorios(){
    //Laura: la des/habilitación del botón no funciona bien. Cuando se borra un campo incorrecto hay que deshabilitar.
    //Laura: si borro un campo no se deshabilita. No se controlan los campos obligatorios
    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;
    var fecha = document.getElementById("fecha").value;
    var tfno = document.getElementById("telefono").value;
    var tit = document.getElementById("titulacion").selectedIndex;
    var cv = document.getElementById("cv").value;
    var clave = document.getElementById("clave").value;
    
    if (nombre!= null && apellido!= null && fecha!= null && tfno!= null && tit!= 0 && cv!= null && clave!= null){
        
        document.getElementById("envio").disabled = false;
    }
    else{
        document.getElementById("envio").disabled = true;
    }
    
    
}

/**
 * Descipcion: valida el nombre
 * @returns {Boolean}
 */
function validarNombre() {

    var nombre = document.getElementById("nombre").value;

    if (nombre == null || nombre.length == 0) {
        document.getElementById("nombre").value = null;
        alert("Nombre obligatorio");
        return false;
    }
    return true;
}

/**
 * Descipcion: valida el apellido
 * @returns {Boolean}
 */
function validarApellido() {

    var apellido = document.getElementById("apellidos").value;

    if (apellido == null || apellido.length == 0) {
        document.getElementById("apellidos").value = null;
        alert("Apellido obligatorio");
        return false;
    }
    return true;
}

/**
 * Descipcion: valida la fecha
 * @returns {Boolean}
 */
function validarFechaNacimiento() {

    var fecha = document.getElementById("fecha").value;

    if (!(/^[01-31]{2}\/[01-12]{2}\/19[00-99]{2}$/.test(fecha))) {
        document.getElementById("fecha").value = null;
        alert("fecha incorrecta. DD/MM/YYYY");
        return false;
    }

    return true;
}

/**
 * Descipcion: valida el tfno
 * @returns {Boolean}
 */
function validarTelefono() {

    var tfno = document.getElementById("telefono").value;
    //Laura: tiene que empezar por 6 ó 9
    if (!(/^6|7\d{8}$/.test(tfno))) {
        document.getElementById("telefono").value = null;
        alert("telefono incorrecto. Empezar por 6o7 y 8 numeros");
        return false;
    }

    return true;
}

/**
 * Descipcion: valida el cv
 * @returns {Boolean}
 */
function validarCV(){
    
    var cv = document.getElementById("cv").value;
    
    if (cv == null) {
        document.getElementById("cv").value = null;
        alert("CV obligatorio");
        return false;
    }
    return true;
    
}

/**
 * Descipcion: valida ls titulacion
 * @returns {Boolean}
 */
function validarTitulacion(){
    
    var tit = document.getElementById("titulacion");
    
    if (tit.selectedIndex != 0){
        return true;
    }
    
    return false;
}

/**
 * Descipcion: valida la clave
 * @returns {Boolean}
 */
function validarClave() {

    var clave = document.getElementById("clave").value;

    if (!(/^\d{1}\D{3}\W{1}\d{1}$/.test(clave))) {
        document.getElementById("clave").value = null;
        alert("clave incorrecta. Numero, 3letras, simbolo, numero");
        return false;
    }

    return true;

}

