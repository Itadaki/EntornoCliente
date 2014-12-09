
        /*
 * Autor=oscar Ventura 
 * Fecha=17-oct-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion= 
 *//* 
 * Copyright (C) 2014 oscar Ventura 
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

        //Laura: las funciones sin comentar, botón derecho--> format
       function comision() {
            
          var hoy=new Date();
          var comision=new Date(hoy.getTime()+(86400000*90));
          //Laura: la fecha es en formato DD/MM/YYYY
          alert("Usted deberá empezar a pagar comisiones el día: "+comision);
          
       }
       
       
       function cuenta() {
           
           alert ("introduzaca el nº de cuenta en este formato: entidad - oficina - DC - nº cuenta (separando por guiones)");
        var cuentas=prompt("numero de cuenta");
        var cuentaa=cuentas.split("-");
        
                if ((cuentaa[0].length>4) || (cuentaa[0].length<4) && cuentaa[0]===0) {alert ("deben ser 4 números y mayor "); system.out.print(0);}
                if ((cuentaa[1].length>4) || (cuentaa[1].length<4)) {alert ("deben ser 4 números"); system.out.print(0);}
                if ((cuentaa[2].length>2) || (cuentaa[2].length<2)) {alert ("deben ser 2 números"); system.out.print(0);}
                if ((cuentaa[3].length>10) || (cuentaa[3].length<10)) {alert ("deben ser 10 números"); system.out.print(0);}
        
        else {
         alert ("su número de cuenta es: "+cuentaa[0]+"-"+cuentaa[1]+"-"+cuentaa[2]+"-"+cuentaa[3]);
     }
       }