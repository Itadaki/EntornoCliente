/*
Autor=Alvaro Camarero Barrio
Fecha=26-ene-2015
Licencia=Expression proyecto is undefined on line 4, column 12 in Templates/ClientSide/javascript.js.
Version=Expression version is undefined on line 5, column 11 in Templates/ClientSide/javascript.js.
Descripcion=
*/
        
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * @description el contador es para los label
 */

/*Laura
 * 
 * Cada campo se debe añadir debajo del anterior, me deja añadir campos siempre, no inserta 2 lineas nuevas entre campo y campo
 * al borrar borra hasta los botones, bot´ton derecho--> format
 */
var cont = 1;
/**
 * @description esta funcion lo que hace es añadir campos input y campos label
 */
            function añadir() {
                
                var campoInput = document.getElementsByTagName("input")[0].cloneNode(true);
                
                var labelNuevo = document.createElement("label");
               
                var texto = document.createTextNode("campo"+cont);
                labelNuevo.appendChild(texto);
                
                
                var PcamposNuevos2 = document.getElementsByTagName("br")[1];
                PcamposNuevos2.insertAdjacentHTML("afterend",labelNuevo.innerHTML);
                
                PcamposNuevos2.insertAdjacentHTML("afterend",campoInput.outerHTML);
                cont++;
                //esto es para disabilitar el boton cuando tenga diez ibnput
                if(campoInput.length===10){
                     
                    document.getElementById('b1').disabled = true; 
                
                }
                }
                
                /**
 * @description esta funcion lo que hace es eliminar los campos que tengan de atributo name de dentro del formulario
 */
                  function eliminar() {
                      var campoInput = document.getElementsByTagName("input")[0];
                      
                var formu = document.getElementById("f1");
//                var campoInput = document.getElementByName("campo");

                formu.removeChild(campoInput); 
                
            }
                
                
                
                

            

