
/*
 Autor=Paul Lozano Cruzado 
 Fecha=05-dic-2014
 Licencia=gpl30
 Version=1.0
 Descripcion=Funciones para validar cammpos
 */

/* 
 * Copyright (C) 2014 Paul Lozano Cruzado 
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
 * Funcion para validar el telefono mediante 
 * una expresion regular que solo permitira numeros
 * y que empieze por 6 o 9
 */

//Laura: ¿y la validación de la fecha?
function validaTelf() {

    var valorNum = document.getElementById("telefono").value;

    if (!(/^(6|9){1}[0-9]{8}$/.test(valorNum)) || valorNum === '') {

        alert("El campo tiene que ser numérico y tiene que tener 9 cifras");
        document.getElementById("telefono").value = '';
        return false;
    } else {
        return true;
    }
}
/**
 * Funcion para validar la clave mediante 
 * una expresion regular que solo permitira una
 * expresion en concreta, numero+3letras+simbolo+numero
 */
function validaClave() {

    var valor = document.getElementById("clave").value;

    if (!(/^[0-9]{1}[a-zA-Z]{3}\W[0-9]{1}$/.test(valor) || valor === null)) {

        alert("El formato de la clave es incorrecta!");
        document.getElementById("clave").value = '';
        return false;

    } else {
        alert("Clave correcto!");
        return true;
    }
}
/**
 * Funcion para comprobar todos las validaciones anteriores
 */
function validacion() {

    if (validaTelf() === true && validaClave() === true) {

        alert("Correcto! Todos los campos son correctos");
        return true;
    } else {
        alert("Vuelve a revisar los campos, por favor");
        return false;
    }
}
/**
 * Funcion que comprueba los campos del formulario
 * y retorna un valor boleano para saber si esta
 * relleno o no lo esta
 */
function compruebaCampos(){
    
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    
    if(nombre === null && apellidos === null){
        alert("hola");
        return false;
    }else{
        
        return true;
    }
}
/**
 * Funcion para activar el boton enviar, si los campos
 * de antes estan rellenos
 */

//Laura: la des/habilitación del botón no funciona correctamente
function activar() {
    
    alert(compruebaCampos());
    if (compruebaCampos()) {

        document.getElementById("envio").disabled = false;
    } else {

        document.getElementById("envio").disabled = true;
    }
}