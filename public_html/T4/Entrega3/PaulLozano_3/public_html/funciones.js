
/*
 Autor=Paul Lozano Cruzado 
 Fecha=14-nov-2014
 Licencia=gpl30
 Version=1.0
 Descripcion= Laura: sin rellenar
 */

/* 
 * Copyright (C) 2014 Paul Lozano Cruzado 
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
 * Explicacion de la funcion...
 */

var index = 0;
var imagenes = new Array("imagenes/Img0.gif",
                          "imagenes/Img1.gif",
                          "imagenes/Img2.gif",
                          "imagenes/Img3.gif");
/**
 * Funcion para mostrar la primera imagen del array
 */
function principio() {
    
    document.getElementById("imagen").src=imagenes[0];
}
/**
 * Funcion para mostrar la imagen anterior a la que este mostrando
 */
//Laura: Anterior y siguiente deben avanzar y retroceder usando el array
function anterior() {
    
    document.getElementById("imagen").src=imagenes[1];
}
/**
 * Funcion para mostrar la siguiente imagen a la que este mostrando
 */
function siguiente() {
    
    document.getElementById("imagen").src=imagenes[2];
}
/**
 * Funcion para mostrar la ultima imagen del array
 */
function ultima() {
    
    document.getElementById("imagen").src=imagenes[3];
}
/**
 * Funcion para abrir una nueva ventana, donde mostrara
 * la url de la imagen, y la imagen que hayas pinchado
 * Se creara una ventana, se guarda su url y se mostrara
 * en la siguiente ventana
 */
function ampliarImagen() {

    var ventana_nueva = window.open('secun.html', 'Nueva Ventana', 'width=500,height=500');    
    var url = document.getElementById("imagen").src;
    ventana_nueva.valor_url = url;
}

