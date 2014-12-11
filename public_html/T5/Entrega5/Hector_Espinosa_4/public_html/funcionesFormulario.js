/*
 Autor=Héctor Espinosa Torres
 Fecha=05-dic-2014
 Licencia=default
 version=1.0
 Descripcion=Laura: sin rellenar 
 */


//Laura:funciones sin comentar
//Laura: detecta datos incorrectos pero realiza el envio, porque esta función tiene que devolver true o false y no hace un return de nada
function validarFormulario() {
    validarFecha();
    validarNombre();
    validarApellidos();
    validarTel();
    validarClave();
    if (validarFecha() === true &&
            validarNombre() === true &&
            validarApellidos() === true &&
            validarTel() === true &&
            validarClave() === true) {
      return true;
        document.getElementById("form_cv").action="formularioCorrecto.html";
        
    }else{
        return false;
        document.getElementById("form_cv").action="formularioErroneo.html";
    }

}
//Laura: hay que validar con expresión regular
function validarFecha() {
    var fecha = document.getElementById("fecha").value.split("/");
    if (fecha !== null) {
        var dia = fecha[0];
        var mes = fecha[1];
        var anio = fecha[2];
        if (dia > 0 &&
                dia <= 31 &&
                mes > 0 &&
                mes <= 12 &&
                anio.substr(0, 2) === "19") {
            
            return true;
        } else {

            alert("fecha incorrecta, formato dd/mm/aaaa");
            return false;
        }
    } else {
        alert("la fecha no puede estar vacia");
        return false;
    }


}
//Laura: nombre y apellidos sólo tienen que tener contenido
function validarNombre() {
    var nombre = document.getElementById("nombre").value;
    if (nombre !== null) {
        if (/^[a-zA-Z]\D{3,15}$/.test(nombre)) {

            return true;
        } else {
            alert("nombre no valido");
            return false;
        }

    } else {
        alert("el nombre no puede estar vacio");
        return false;
    }
}
function validarApellidos() {
    var apellidos = document.getElementById("apellidos").value;
    if (apellidos !== null) {
        if (/^[a-zA-Z]\D{3,10}\s{1}[a-zA-Z]\D{3,10}$/.test(apellidos) ) {
            
            return true;

        } else {
            alert("Apellidos no validos");
            return false;

        }
    } else {
        alert("el campo apellidos no puede estar vacio");
        return false;
    }
}

function validarTel() {
    var tlf = document.getElementById("telefono").value;
    if (tlf !== null) {
        if (/^[69]{1}[0-9]{8}$/.test(tlf)) {
            
            return true;

        } else {
            alert("Telefono incorrecto");
            return false;

        }

    } else {
        alert("el campo telefono no puede estar vaccio");
        return false;
    }
}

function validarClave() {

    var clave = document.getElementById("clave").value;
    if (tlf !== null) {
        if (/^\b\d[a-zA-Z]{3}\W{1}\b\d$/.test(clave)) {
           
            return true;

        } else {
            alert("Clave incorrecta. Debe empezar por numero,<br>\n\
                     seguido de 3 letras, un simbolo y un numero");
            return false;

        }
    } else {
        alert("Debes introducir una clave");
        return false;
    }
}



