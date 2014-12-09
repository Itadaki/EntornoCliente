/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 19-sep-2014
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = Algoritmo de numeros primos
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

/**
 * @description Imprime en alertas numeros primos entre 2 y 100
 * @returns 
 */
function primos() {
    for (i = 2; i <= 100; i++) {
        var primo = true;
        for (j = 2; j < i; j++) {
            if (i % j === 0)
                primo = false;
        }
        if (primo)
            alert(i);
    }
}