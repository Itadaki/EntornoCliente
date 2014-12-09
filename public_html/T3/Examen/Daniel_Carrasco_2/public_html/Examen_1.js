
/*
<!DOCTYPE html>
<!--
Autor = Daniel Carrasco Barcena
Fecha = 17-oct-2014
Licencia = gpl30
Version = 1.0
Descripcion =  Funciones para comprobar la introducción correcta del numero de cuenta y la fecha dentro de 90 dias
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

/**
   * Creamos una funcion para comprobar la introducion correcta de los datos bancarios
   */ 

//Laura: faltan comentarios, función incompleta
function comprobar_cuenta() {
    
   
    var num_cuenta = prompt ("Introduzca numero de cuenta");
    
  
    
    for (i = 0; i<num_cuenta.length; i++) {

        if (isNan (num_cuenta.chart[i]) || num_cuenta.length<20) {
            
            //alert("No ha introducido un numero o ha introducido demasiados valores");
            
        } 
        }
        
    


    }
    
   /**
   * Creamos una funcion para calcular que dia seria dentro @description 90 dias a partir de la fecha de hoy
   */ 
  
  //Laura: faltan comentarios de la función
  function fecha () {
      
    var fecha = new Date(1970,0,1); // Calculamos la fecha UNIX
    var fecha2 = new Date(1970,0,2); // Calculamos el dia siguiente de la fecha UNIX
    var fecha_hoy = new Date(); 

    var diferencia = fecha2 - fecha; // Calculamos los milisegundos que hay entre dos dias
    
    var dia = diferencia*90 + fecha_hoy.getTime(); // Calculamos cuantos milisegundos hay en 90 dias

    var fecha90 = new Date (dia); // Creamos un objeto de la clase Date a la que le pasamos el valor obtenido de calcular los 90 dias
    
   
    //Laura: la fecha en formato DD/MM/YYYY
    alert ("Usted debera empezar a pagar comisiones a partir del: " + fecha90.toLocaleString().substr(0,9));// Mostramos por pantalla la fecha solicitada

      
  
      
      
  }
  

        
    
        
        
        
    

