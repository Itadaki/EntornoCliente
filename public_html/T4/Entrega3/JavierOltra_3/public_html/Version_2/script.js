
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
var imagenes = new Array("Img0.gif", "Img1.gif", "Img2.gif", "Img3.gif");

var imagen = 0;
function siguiente() {
    imagen++;
    if (imagen == 4) {
        imagen = 0;
    }
    document.getElementById("imagen").src = "img/" + imagenes[imagen];
}
function anterior() {
    imagen--;
    if (imagen == -1) {
        imagen = 3;
    }
    document.getElementById("imagen").src = "img/" + imagenes[imagen];
}