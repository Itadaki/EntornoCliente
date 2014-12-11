/*
Autor=Alejandro Montoya Blanco
Fecha=05-dic-2014
Licencia=gpl30
Version=1.0
Descripcion=Archivo con todas las funciones para el formulario
*/


        
/* 
 * Copyright (C) 2014 Alejandro Montoya Blanco
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
//Laura: el código de puede hacer más eficiente
function validaTodos() { /*Valida la Fecha el Telefono y la clave*/

    if (validaFecha()==true && validaTfno()==true && validaClave()==true){
        document.getElementById('form_cv').onsubmit=true;
        //Laura: y false para que no se realice?
    };
    

}
function validaTfno() {    /*Valida el telefono */
    var valor = document.getElementById("telefono").value; 

    if (!(/^[6,9]{1}\d{8}$/.test(valor))) { 
        alert("Telefono incorrecto, has introducido algun caracter no numerico o mas de 9 números.");
        document.getElementById("telefono").value = ""; /*Deja el Campo vacio*/
        document.getElementById("envio").disabled = true;/*Deshabilita el boton envio*/
        return false;
    }

    return true;
}
function validaFecha() {/*Valida la fecha*/
    var valor = document.getElementById("fecha").value;
    var fecha = valor.split("/");
    //Laura: toda la validación con expresión regular
    if ((fecha[0] > 31) || (fecha[1] > 12)) {
        alert("Fecha incorrecta el dia o el mes esta fuera de valor");
        document.getElementById("fecha").value = ""; /*Deja el Campo vacio*/
        document.getElementById("envio").disabled = true;/*Deshabilita el boton envio*/
    }
    else if (!(/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[1]{1}[9]{1}[0-9]{2}$/.test(valor))) {
        alert("La fecha no tiene el formato requerido de formato DD/MM/AAAA, recuerda que tiene que ser un año del siglo XX");
        document.getElementById("fecha").value = "";/*Deja el Campo vacio*/
        document.getElementById("envio").disabled = true;/*Deshabilita el boton envio*/
    }
    else {

        return true;
    }

}
//Laura: funciones sin comentar
function validaClave() { /*Valida la clave*/
    var valor = document.getElementById("clave").value;

    if (!(/^\d{1}[a-zA-Z]{3}\W{1}\d{1}$/.test(valor))) {
        alert("La clave no es correcta. Ejemplo:7aHf$8");
        document.getElementById("clave").value = ""; /*Deja el Campo vacio*/
        document.getElementById("envio").disabled = true; /*Deshabilita el boton envio*/
        return false;
    }
    else {

        return true;
    }
}
function obligatorio() { /*Comprueba que todos los datos estan rellenos, en ese caso, habilita el boton enviar.*/
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var fecha = document.getElementById("fecha").value;
    var telefono = document.getElementById("telefono").value;
    var clave = document.getElementById("clave").value;
    var foto = document.getElementById("cv").value;
    var eleccion = document.getElementById("titulacion").value;


    if ((nombre === "") || (apellidos === "") || (fecha === "") || (telefono === "") || (clave === "") || (foto === "") || (eleccion === "")) {
        document.getElementById("envio").disabled = true;  /*Deshabilita el boton envio*/

    }
    else
        document.getElementById("envio").disabled = false; /*habilita el boton envio*/
        }