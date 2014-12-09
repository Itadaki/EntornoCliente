/*
 Autor=Alvaro Camarero Barrio
 Fecha=14-nov-2014
 Licencia=Expression proyecto is undefined on line 4, column 12 in Templates/ClientSide/javascript.js.
 Version=Expression version is undefined on line 5, column 11 in Templates/ClientSide/javascript.js.
 Descripcion=
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var imagenes = new Array("imagenes/Img0.gif", "imagenes/Img1.gif", "imagenes/Img2.gif", "imagenes/Img3.gif");



//Laura: hay que utilizar el array para hacer todo esto
function siguiente() {
    document.getElementById("imagen0").value =
            document.getElementById("imagen0").src = ("imagenes/Img1.gif");
//                for(var cont=0;cont<imagenes.length;cont++){
//                if(cont==0){
//                     document.getElementById("imagen0").value =
//                        document.getElementById("imagen0").src = imagenes[0];
//                }
//                   if(cont===1){
//                     document.getElementById("imagen0").value =
//                        document.getElementById("imagen0").src = imagenes[1];
//                }
//                    if(cont===2){
//                     document.getElementById("imagen0").value =
//                        document.getElementById("imagen0").src = imagenes[2];
//                }
//                    if(cont===3){
//                     document.getElementById("imagen0").value =
//                        document.getElementById("imagen0").src = imagenes[3];
//                }
//                
//                
//                
//        }
////                
//                for (var i = 0; i < (imagenes.length); i++) {
//                    document.getElementById("imagen0").value =
//                            document.getElementById("imagen0").src = imagenes[i];
//
//                }


}
function anterior() {
    document.getElementById("imagen0").value =
            document.getElementById("imagen0").src = ("imagenes/Img0.gif");
}
function principio() {
    document.getElementById("imagen0").value =
            document.getElementById("imagen0").src = ("imagenes/Img0.gif");
}
function ultima() {
    document.getElementById("imagen0").value =
            document.getElementById("imagen0").src = ("imagenes/Img3.gif");
}



