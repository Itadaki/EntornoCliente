/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 14-nov-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Contiene funciones para el visor de imágenes
 */

/* 
 * Copyright (C) 2014 Diego Rodríguez Suárez-Bustillo
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

/*****Para Visor v1*****/
/*Lista de imágenes a mostrar*/
var arrImg = ['Img0.gif', 'Img1.gif', 'Img2.gif', 'Img3.gif'];
var indice = 0;
/*Objeto de la imagen que va a cambiar*/
var imagen = document.getElementById('imagen');

/**
 * @description Avanza en el visor de imágenes
 */
function avanzar() {
    indice++;
    if (indice === arrImg.length) {
        indice = 0;
    }
    imagen.src = 'img/' + arrImg[indice];
}

/**
 * @description Retrocede en el visor de imágenes
 */
function retroceder() {
    indice--;
    if (indice < 0) {
        indice = arrImg.length - 1;
    }
    imagen.src = 'img/' + arrImg[indice];
}

/**
 * @description Pone el visor de imágenes al principio
 */
function principio() {
    imagen.src = 'img/' + arrImg[0];
    indice = 0;
}

/**
 * @description Pone el visor de imágenes al final
 */
function fin() {
    imagen.src = 'img/' + arrImg[arrImg.length - 1];
    indice = arrImg.length - 1;
}

/**
 * @description Abre una ventana secundaria para mostrar la imágen en grande
 */
function abrirVentana() {
    var ventana = window.open('secundaria.html', 'Imágen', 'height=500, width=500');
    ventana.imagen = arrImg[indice];
}

/**
 * @description Muestra la URL actual en el campo #URL
 */
function mostrarURL() {
    document.getElementById('url').value = location.href;
}


/*****Para Visor v2*****/
var intervalo;
var periodo = 500;

/**
 * @description Crea un intervalo que avanza en el visor de imágenes
 */
function avanzarIntervalo() {
    detenerIntervalo();
    intervalo = setInterval(function () {
        avanzar();
    }, periodo);
}

/**
 * @description Crea un intervalo que retrocede en el visor de imágenes
 */
function retrocederIntervalo() {
    detenerIntervalo();
    intervalo = setInterval(function () {
        retroceder();
    }, periodo);
}

/**
 * @description Detiene el intervalo del visor de imágenes
 */
function detenerIntervalo() {
    clearInterval(intervalo);
}
