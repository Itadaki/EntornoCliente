
/*
 <!--
Autor = Javier Oltra Riera
Fecha = 26-ene-2015
Licencia = default
Version = 1.0
Descripcion = JavaScript del examen Tema 6
-->
 */        
/* 
 * Copyright (C) 2015 Javier Oltra Riera
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
var cont = 0;
            /*
             * @description inserta una etiqueta label, una etiqueta input de tipo texto y dos br
             */
            function insertar() {
                cont++;
                if (cont > 0) {
                    //en el caso de que el contador sea mayor que cero se habilitara el boton borrar.
                    document.getElementById("b2").disabled = false;
                }
                var form = document.getElementById("f1");

                var campo = document.createElement("input");
                campo.setAttribute("type", "text");
                campo.setAttribute("id", "c" + cont);

                var label = document.createElement("label");
                label.innerHTML = "campo" + cont;
                label.setAttribute("id", "l" + cont);

                var punto = document.getElementsByTagName("br");
                punto[punto.length - 1].insertAdjacentHTML('afterend', label.outerHTML + " " + campo.outerHTML + "<br><br>");
                if (cont > 8) {
                    //en el caso de que el contador sea mayor que 8 se deshabilitara el boton crear.
                    document.getElementById("b1").disabled = "disabled";
                }
            }
            /*
             * @description borra dos br, un input y un label, y resta uno al contador para que se quede en el campo que este.
             */
            
            //Laura: no funciona bien, una vez que borro no se puede volver a añadir
            function eliminar() {

                var form = document.getElementById("f1");
                for (var i = 6; i < 10; i++) {
                    form.removeChild(form.childNodes[form.childNodes.length - i]);
                }
                cont--;
            }

