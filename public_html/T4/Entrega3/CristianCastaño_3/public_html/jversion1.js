/*
 * Autor=Cristian Castaño 
 * Fecha=14-nov-2014
 * Licencia=gpl30
 * Version=1.0
 * Descripcion=version1, script para mostrar un visor de imágenes con un 
 * conjunto de botones
 */
/* 
 * Copyright (C) 2014 Cristian Castaño 
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
var imagenes = new Array();
imagenes[0] = "Imagen0";
imagenes[1] = "Imagen1";
imagenes[2] = "Imagen2";
imagenes[3] = "Imagen3";
ima=0;

//Laura: sin documentar. Cristian si no cambias la imagen en el visor no se muestra
function siguiente() {
    //Laura: esto es muy ineficiente no se hace así
    if (ima === 0) {
        alert(imagenes[1]);
    ima++;
    }
    else if (ima === 1) {
        alert(imagenes[2]);
      ima++;  
    }
    else if (ima === 2) {
        alert(imagenes[3]);
        ima++;
    }
    else if (ima === 3) {
        alert(imagenes[0]);
        ima=0;
    }

}
function anterior() {

     if (ima === 0) {
        alert(imagenes[3]);
        ima=3;
    }
    else if (ima === 3) {
        alert(imagenes[2]);
        ima--;
    }
    else if (ima === 2) {
        alert(imagenes[1]);
        ima--;
    }
    else if (ima === 1) {
        alert(imagenes[0]);
        ima--;
    }

}
function primera() {
    alert(imagenes[0]);
    ima=0;
}
function ultima() {
    alert(imagenes[3]);
    ima=3;
}