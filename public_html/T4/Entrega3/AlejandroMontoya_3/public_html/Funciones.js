/*
Autor=Alejandro Montoya Blanco
Fecha=14-nov-2014
Licencia=gpl20
Version=1.0
Descripcion=funciones de abrir nueva ventana siguiente anterior ultima y primera.
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
//LAura: Botón derecho --> format!!!
           var fotos=new Array("Img0.gif","Img1.gif","Img2.gif","Img3.gif");
   
          window.onload=rellena;
        
          var i=0;
          function rellena(){
                  //Laura: te has complicado .src= y ya lo tienes
              document.getElementById("imagen").innerHTML="<img src='"+fotos[0]+"'/>"; /* Visualiza la primera foto */
          ruta="<img src='"+fotos[0]+"' width=500 height=500/>";
          }
          function siguiente(){/* Va sumando el indice y cuando llega a 4 vuelve a empezar */
      
        i++;
              if (i==4){
              i=0;
              }
              document.getElementById("imagen").innerHTML="<img src='"+fotos[i]+"'/>";
        ruta="<img src='"+fotos[i]+"' width=500 height=500/>";
          
            }
            function anterior(){ /* Va restando el indice y cuando llega a 0 vuelve a 3 */
                             i--;
              if (i<0){
              i=3;
              }
              document.getElementById("imagen").innerHTML="<img src='"+fotos[i]+"'/>";
    ruta="<img src='"+fotos[i]+"' width=500 height=500/>";
          
            
            }
            function principio(){/* inicializa el indice a 0 */
                i=0;
               document.getElementById("imagen").innerHTML="<img src='"+fotos[i]+"'/>"; 
               
            }
           function final(){/* inicializa el indice a 3*/
                i=3;
               document.getElementById("imagen").innerHTML="<img src='"+fotos[i]+"'/>"; 
               ruta="<img src='"+fotos[i]+"' width=500 height=500/>'";
              
            }

            


      
    
    function visualizaVentana(){/* abre nueva ventana */
            var ventana;
            ventana=window.open("Ventana2.html","Nueva","width=500,heigth=500");
            ventana.valor=ruta;
}
          
    

          
          
