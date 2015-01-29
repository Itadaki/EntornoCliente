/*
 * Autor= Bárbara de Olabarria
 * Fecha= 26-ene-2015
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion= Documento js para Formulario6.html
 **/
/* 
 * Copyright (C) 2015 Bárbara de Olabarria
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
/*
 * Laura
 * Los campos hay que añadirlos debajo del último campo existente, borrar campos no hace nada, me deja añadir más campos cuando ya hay 10
 */
var contador = 0;
/**
 * @function crear
 * Crea nuevos elementos
 */
function crear() {
    if (contador < 10) {
        contador++;
        var element = "<label>Campo" + contador + "</label><input type='text'><br><br>";
        document.getElementsByTagName("body")[0].innerHTML = document.getElementsByTagName("body")[0].innerHTML + element;
    }
}
/**
 * @function eliminar
 * Elimina los nuevos elementos creados
 */
function eliminar() {
    if (contador <1) {
        document.getElementById("b2").disabled = true;
    }
    contador--;
}