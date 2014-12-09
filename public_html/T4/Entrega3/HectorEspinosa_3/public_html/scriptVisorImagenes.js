/*
Autor=Héctor Espinosa Torres
Fecha=14-nov-2014
Licencia=gpl30
version=1.0
Descripcion= Es el script que hacce posible el visor de imagenes de visorImagenes.html
*/
/* 
 * Copyright (C) 2014 Héctor Espinosa Torres
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

var Imagenes= new Array("Img0.gif","Img1.gif","Img2.gif","Img3.gif");
var cont=0;
//Laura: botón derecho-->format
function imgSiguiente(){
   //esta funcion muestra la imagen siguiente del array 
   //Laura: se puede hacer más eficiente
    if(cont<Imagenes.length-1){
   cont++;
   document.getElementById("ImagenActual").src="fotos/"+Imagenes[cont];
      
    }
    
    else{
        //cuando llega al final y se vuelve a pulsar muestra imagenes[0]        
        cont=0;
       document.getElementById("ImagenActual").src="fotos/"+Imagenes[0];
       
    }
   
}

function imgAnterior(){
    
    //muestra la imagen anterior
    if(cont> 0){
      cont--;
    document.getElementById("ImagenActual").src="fotos/"+Imagenes[cont];
    
       
            
    }else{
       //cuando llega a 0 y se vuelve a pulsar en el boton muestra la ultima imagen del array
        cont=Imagenes.length-1;
        document.getElementById("ImagenActual").src="fotos/"+Imagenes[cont];
        
    }
}

function imgPrimera(){
    //muestra la primera imagen del array    
     document.getElementById("ImagenActual").src="fotos/"+Imagenes[0];
     
}

function imgUltima(){
    document.getElementById("ImagenActual").src="fotos/"+Imagenes[Imagenes.length-1];
    //muestra la ultima imagen del array
}

function AbrirEnVentana(){
    //Abre una nueva ventana donde se muestra la imagen pulsada
    var nuevaVentana=window.open("ventanaSecundaria.html","Imagen","width=500,height=500");
    
            var Img = document.getElementById("ImagenActual").src;
}         nuevaVentana.imagen=Img; //Laura: esta línea de código está fuera de la llave de cierre

