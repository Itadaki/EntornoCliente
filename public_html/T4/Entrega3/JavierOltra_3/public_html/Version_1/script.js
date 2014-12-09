
/*
 <!--
 Autor = Javier Oltra Riera
 Fecha = 14-nov-2014
 Licencia = gpl30
 Version = 1.0
 Descripcion = Script del examen.
 -->
 */
/* 
 * Copyright (C) 2014 Javier Oltra Riera
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
/*Cuando carga la pagina se ejecuta el metodo cargarUrl*/
window.onload = cargarUrl;

/**
 * 
 * @description Asigna al campo de texto la variable location que contiene la url de la pagina.
 */
function cargarUrl() {
    document.getElementById("texto").value = location;
}
/*Array de las imagenes.*/
var imagenes = new Array("Img0.gif", "Img1.gif", "Img2.gif", "Img3.gif");

/*Indice numerico de las imagenes*/
var imagen = 0;
/**
 * 
 * @description Asigna a la imagen la ruta de la imagen siguiente a la que este.
 */
//Laura: ¿y si son 8 imagenes en vez de 4?
function siguiente() {
    imagen++;
    if (imagen == 4) {
        imagen = 0;
    }
    document.getElementById("imagen").src = "img/" + imagenes[imagen];
}
/**
 * 
 * @description Asigna a la imagen la ruta de la imagen anterior a la que este.
 */
//Laura: ¿y si son 8 imagenes en vez de 4?
function anterior() {
    imagen--;
    if (imagen == -1) {
        imagen = 3;
    }
    document.getElementById("imagen").src = "img/" + imagenes[imagen];
}
/**
 * 
 * @description Asigna a la imagen la ruta de la primera imagen.
 */
function primera(){
    imagen=0;
    document.getElementById("imagen").src = "img/" + imagenes[0];
}
/**
 * 
 * @description Asigna a la imagen la ruta de la ultima imagen.
 */
function ultima(){
    imagen=3;
    document.getElementById("imagen").src = "img/" + imagenes[(imagenes.length-1)];
}
/**
 * 
 * @description Abre la ventana nueva con 500px de alto y 500px de ancho y asigna la ruta a la variable valor de la nueva ventana.
 */
function imgGrande(){
    var ventana = window.open("Ventana_imagen.html", "Imagen", "height=500px,width=500px");
    ventana.valor = document.getElementById("imagen").src;
}