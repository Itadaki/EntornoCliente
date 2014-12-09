/*
Autor=Julia Bustos Ferro 
Fecha=17-oct-2014
Licencia=gpl30
Version=1.0
Descripcion= Se desarrollan dos funciones: 
    -comprobar cuenta: el usario introduce su número de cuenta, mientras sea erróneo, ha de volver a introducir el número
    se comprueba si es un número y si la longitud de cada elemento se corresponde con los elementos que identifican a cada uno de ellos

    -pagocomision: se muestra la fecha actual y la fecha en que el cliente habrá de empezar a pagar comisiones 
*/
        
/* 
 * Copyright (C) 2014 Julia Bustos Ferro 
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

//Laura: faltan comentarios función, para un número de cuenta correcta me dice que me he equivocado.Botón derecho --> format
function comprobarCuenta() {

    var entrada = prompt("Dime tu número de cuenta separado por '-': ####-####-##-##########");
    var arraycuenta = entrada.split('-'); //Creación del array con los nombres
    //  alert(arraycuenta);

    if (isFinite(arraycuenta)) {
        
   //Laura: 4 if en lo que tienes el mismo código 
   if (isNaN(arraycuenta[0]) || arraycuenta[0].length !== 4) { //entidad
            alert("Número de entidad incorrecto");
            var entrada = prompt("Dime tu número de cuenta otra vez");
            var arraycuenta = entrada.split('-');
    }
    if (isNaN(arraycuenta[0]) || arraycuenta[1].length !== 4) { //oficina
        alert("Número de oficina incorrecto");
        var entrada = prompt("Dime tu número de cuenta otra vez");
        var arraycuenta = entrada.split('-');
    }

    if (isNaN(arraycuenta[0]) || arraycuenta[2].length !== 2) { //DC
        alert("Número de DC incorrecto");
        var entrada = prompt("Dime tu número de cuenta otra vez");
        var arraycuenta = entrada.split('-');
    }

    if (isNaN(arraycuenta[0]) || arraycuenta[3].length !== 10) { //cuenta
        alert("Número de cuenta incorrecto");
        var entrada = prompt("Dime tu número de cuenta otra vez");
        var arraycuenta = entrada.split('-');
    }
    
   
    
    var cuentacadena= arraycuenta.join(" - "); 
    alert(cuentacadena); //visualizamos el número de cuenta introducido. Concatenamos los elementos del array en una cadena separada por -
   
    var entidad = arraycuenta.slice(0,1); // con slice cogemos el subconjunto del array especificado a través de los índices
      alert("Número de entidad: " + entidad);
      
    var oficina = arraycuenta.slice(1,2);
     alert("Número de oficina: " + oficina);
     
    var dc = arraycuenta.slice(2,3);
     alert("Número de DC: " + dc);
     
    var cuenta = arraycuenta.slice(3);
      alert("Número de cuenta: " + cuenta);
  
    }else //Laura: este else de que if es?
       alert ("te has equivocado ");
   }

//Laura: faltan comentarios función
function pagoComision() {

    var h = new Date();  // la fecha de pago de comisiones será dentro de 90 días a partir de la actual 
    var dia = h.getDay();
    var mes = h.getMonth();
    var año = h.getFullYear();

    //Laura: la fecha dentro de 90 días tiene que ir cambiando en función del día que ejecute el código, esto no vale
    var c = new Date(2015, 01, 17); // dentro de 90 días
  
    var cdia = c.getDay();
    var cmes = c.getMonth();
    var caño = c.getFullYear();
    //Laura: el formato de la fecha era DD/MM/YYYY
    alert("Hoy es: " + dia + "/" + mes + "/" + año);
    alert("Tienes que empezar a pagar comisiones: " + cdia + "/" + cmes + "/" + caño);

}
