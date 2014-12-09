
/*
<!DOCTYPE html>
<!--
Autor = Daniel Carrasco Barcena
Fecha = 14-nov-2014
Licencia = gpl30
Version = 1.0
Descripcion = Creacion de metodos para visualizar las imagenes
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


var imagenes = new Array ('<img src=imagenes/Img0.gif/>','<img src=imagenes/Img1.gif/>','<img src=imagenes/Img2.gif/>','<img src=imagenes/Img3.gif/>');


/**
 * Creamos una funciÃ³n que nos permita ver la primera imagen del array
 */
function principio() {
    
    
  document.getElementById("visor").innerHTML = imagenes[0];
}


/**
 *Creamos una funcion que nos permita ver la ultima imagen del array
 */
function final() {
    
        document.getElementById("visor").innerHTML = imagenes[3];
    
    
}

//LAura: esto no se hace así, con el índice del array
function siguiente() {
    
      var imagen = document.getElementById("visor").innerHTML;  
      
      
      if (imagen.indexOf("0")) {
          
           document.getElementById("visor").innerHTML = imagenes[1];
        
    } else if (imagen.indexOf("1")) {
        
          document.getElementById("visor").innerHTML = imagenes[2];
        
    } else if(imagen.indexOf("2")) {
        
          document.getElementById("visor").innerHTML = imagenes[3];
        
    } else if (imagen.indexOf("3")) {
        
         document.getElementById("visor").innerHTML = imagenes[0];
        
    }
        
      
        
    }



    
    


function anterior() {
    
      var imagen = document.getElementById("visor").innerHTML;  
      
      
      if (imagen.indexOf("0")) {
          
           document.getElementById("visor").innerHTML = imagenes[3];
        
    } else if (imagen.indexOf("3")) {
        
          document.getElementById("visor").innerHTML = imagenes[2];
        
    } else if(imagen.indexOf("2")) {
        
          document.getElementById("visor").innerHTML = imagenes[1];
        
    } else if (imagen.indexOf("1")) {
        
        document.getElementById("visor").innerHTML = imagenes[0];
        
    } 
        
     
    }



    
    
