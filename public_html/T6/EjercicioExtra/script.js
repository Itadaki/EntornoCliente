/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 29-ene-2015
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = 
 */

/* 
 * Copyright (C) 2015 Diego Rodríguez Suárez-Bustillo
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

var existeCursos = false;
var existeAsignaturas = false;
var arrCursos = ['Primero', 'Segundo', 'Tercero', 'Cuarto', 'Quinto']
var arrAsignaturas = [
    //DAW
    [
        //Primero
        [
            'Bases de datos',
            'Entornos de desarrollo',
            'Formación y orientación laboral',
            'Lenguaje de marcas',
            'Programación',
            'Sistemas informáticos'
        ],
        //Segundo
        [
            'Desarrollo web en entorno cliente',
            'Desarrollo web en entorno servidor',
            'Despliegue de aplicaciones web',
            'Diseño de interfaces web',
            'Empresa e iniciativa emprendedora',
            'Inglés técnico para grado superior',
            'Proyecto de desarrollo de aplicaciones web',
            'Formación en Centros de Trabajo'
        ]
    ],
    //DAM-DAW
    [
        //Primero
        [
            'Bases de datos',
            'Entornos de desarrollo',
            'Formación y orientación laboral',
            'Lenguaje de marcas',
            'Programación',
            'Sistemas informáticos'
        ],
        //Segundo
        [
            'Acceso a datos',
            'Desarrollo de interfaces',
            'Empresa e iniciativa emprendedora',
            'Inglés técnico para grado superior',
            'Programación de servicios y procesos',
            'Programación multimedia y dispositivos móviles',
            'Sistemas de gestión empresarial',
            'Proyecto de desarrollo de aplicaciones multiplataforma'
        ],
        //Tercero
        [
            'Desarrollo web en entorno cliente',
            'Desarrollo web en entorno servidor',
            'Despliegue de aplicaciones web',
            'Diseño de interfaces web',
            'Empresa e iniciativa emprendedora',
            'Inglés técnico para grado superior',
            'Proyecto de desarrollo de aplicaciones web',
            'Formación en Centros de Trabajo'
        ]
    ]
];

function añadirCursos(input) {
    var curso = input.value;
    var formulario = document.getElementById('formulario');
    //Crear select
    var select = document.createElement('select');
    select.innerHTML = '<option selected>--Seleccione curso--</option>';
    select.setAttribute('onchange', 'añadirAsignaturas(this)');
    select.setAttribute('id', 'cursos');
    //Eliminar contenido dejando la descripcion
    while (select.options.length > 1) {
        select.options.remove(1);
    }
    //crear option1
    var option = document.createElement('option');
    option.innerHTML = 'Primero';
    select.appendChild(option);
    //crear optio2
    option = document.createElement('option');
    option.innerHTML = 'Segundo';
    select.appendChild(option);
    //crear option3
    if (curso === 'DAM-DAW') {
        option = document.createElement('option');
        option.innerHTML = 'Tercero';
        select.appendChild(option);
    }
    if (!existeCursos) {
        formulario.appendChild(select);
        existeCursos = true;
    } else {
        formulario.replaceChild(select, document.getElementById('cursos'));
    }
    if (existeAsignaturas) {
        formulario.removeChild(document.getElementById('asignaturas'));
        existeAsignaturas = false;
    }
}

function añadirAsignaturas(radios) {
    var formulario = document.getElementById('formulario');
    var ciclo = 0;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            ciclo = i;
        }
    }
    //Crear el select
    var select = document.createElement('select');
    select.innerHTML = '<option selected>--Asignaturas--</option>';
    select.setAttribute('id', 'asignaturas');
    //Borrar todo menos la descripcion
    while (select.options.length > 1) {
        select.options.remove(1);
    }
    //Insertar los options concretos
    var curso = document.getElementById('cursos').selectedIndex;
    if (curso > 0) {
        var asignaturas = arrAsignaturas[ciclo][curso - 1];
        for (var i = 0; i < asignaturas.length; i++) {
            var option = document.createElement('option');
            option.innerHTML = asignaturas[i];
            select.appendChild(option);
        }
    }
    if (!existeAsignaturas) {
        formulario.appendChild(select);
        existeAsignaturas = true;
    } else {
        formulario.replaceChild(select, document.getElementById('asignaturas'));
    }
}