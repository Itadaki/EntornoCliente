/*
 * Autor=Patricia Del Moral Jiménez
 * Fecha = 17-oct-2014
 * Licencia = gpl30
 * Versión=1.0
 * Descripción= Funciones para el examen
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 *En la función vamos a poner el programa donde se pide el número de cuenta  
 *bancaria para luego mostrarselo al usuario
 */
function cbancaria() {
    //Laura: no funciona, faltan validaciones. 1234-5678-98-0123456789888, 1234-5678-98-012345678-9888 ó 1234-5678-98-0asdfasdfas son cuentas correctas para tu programa
    do {
        var arraycuenta = new Array();
        var datos = new Array("ENTIDAD", "OFICINA", "DIGITO DE CONTROL",
                "CUENTA"); //array con las partes de la cuenta
        var cuenta = prompt("Introduce tu cuenta bancaria");
        arraycuenta = cuenta.split('-'); //creacion del arraycuenta
        for (var i = 0; i < arraycuenta.length; i++) {
            alert(datos[i] + ":" + arraycuenta[i]);
        }
    } while (cuenta === " ")
    alert("No has introducido ninguna cuenta");
}
/**
 * 
 * Funcion para saber cuando tiene que empezar a pagar las comisiones por la cuenta
 */
function comisiones() {
    var mifecha = new Date();
    var comienzo = new Date(mifecha.getTime() + (90 * (24 * 60 * 60 * 1000))); //multiplicamos 90 por las 24h
    alert("Comenzaras a combrar comisiones por la cuenta el día:");
    //Laura: os pido formato DD/MM/YYYY, para enero saca el 0
    alert(comienzo.getDate() + "/" + comienzo.getMonth() + "/" + comienzo.getFullYear()); //separamos el mes el día y el año
}