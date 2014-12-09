/*
 * Autor=Cristian Castaño 
 * Fecha=17-oct-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion= Codigo javaScript para validar un numero de cuenta y visualizarlo
 Tambien mostrara la fecha en la que se empezara a pagar comisiones.
 */
/* 
 * Copyright (C) 2014 Cristian Castaño 
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

/*La funcion cuenta es la encargada de proporcionar al usuario 
 la opcion de introducir su numero de cuenta, comprobar que es 
 correcto, y permitirle visualizar las partes de su número.
 */
//Laura: tienes que comentar las funciones como os pedí
function cuenta() {
    //Laura: no realizas ninguna validación, ni solicitas mientras sea incorrecto
    var numero = prompt("Introduce tu numero de cuenta");
    var entidad = numero.slice(0, 4);//Aqui se esta los 4 primeros números corresponden a la entidad
    var oficina = numero.slice(6, 10);//Los 4 siguientes pertenecen a la oficina
    var dc = numero.slice(12, 14);//Estos 2 forman el DC
    var num = numero.slice(16, 26);//Este es el número de cuenta de 10 digitos
    alert(numero + " Es un número de cuenta correcto");// muestra el numero de cuenta
    //Laura: no tienes ninguna variable que se llame cuenta, no extraes bien las partes de la cadena
    alert("Entidad: " + entidad + " Oficina: " + oficina + " DC: " + dc + " N_cuenta: " + cuenta);//muestra separado las diferentes partes    
}
/*La funcion fecha es la encargada de mostrar la fecha 
 en la que empezara a pagar comisiones.
 calcula el tiempo que pasa durante 90 dias y se lo suma a la fecha actual
 para obtener la fecha de comienzo de pago de comisiones.
 */
function fecha() {
    var a = new Date(2001, 2, 1);//valor1 para calcular el paso de 90 dias
    var b = new Date(2001, 4, 30);//valor2 para calcular el paso de 90 dias 
    var x = a.getTime();//valor1 en tiempo transcurrido desde la epoca de unix
    var y = b.getTime();//valor2 en tiempo transcurrido desde la epoca de unix
    var tiempo = y - x;//calculo del tiempo pasado en 90 dias
    var fecha_actual = new Date();//fecha actual
    var hoy = fecha_actual.getTime();//fecha actual en tiempo transcurrido desde la epoca unix
    var comision = hoy + tiempo;//resultado del tiempo que transcurre en 90 dias desde la fecha actual
    var total = new Date(comision);//fecha tras los 90 dias
    //Laura: formato DD/MM/YYYY
    var dia = total.getDate();//dia tras los 90 dias
    var mes = total.getMonth() + 1;//mes tras los 90 dias en formato 1-12
    var ano = total.getFullYear();//año tras los 90 dias en formato 4 digitos
    alert("Empezaras a pagar comisiones el: " + dia + "/" + mes + "/" + ano);//muestra la fecha tras 90 dias 

}
