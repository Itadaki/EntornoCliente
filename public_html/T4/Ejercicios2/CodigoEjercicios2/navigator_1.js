/*
 * Autor= Laura Lozano
 * Fecha= 03-oct-2014
 * Licencia= gpl30
 * Version= 1.0
 * Descripcion=  Funciones de utilidad de user agent
 * /     
 
 
 /* 
 * Copyright (C) 2014 Laura Lozano
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


function getBrowserName() {
    var lsBrowser = navigator.appName;
    if (lsBrowser.indexOf("Microsoft") >= 0) {
        lsBrowser = "MSIE";
    }
    else if (lsBrowser.indexOf("Netscape") >= 0) {
        lsBrowser = "NETSCAPE";
    }
    else {
        lsBrowser = "UNKNOWN";
    }
    return lsBrowser;
}

function getOS() {
    var userPlat = "unknown";
    var navInfo = navigator.userAgent;

    if ((navInfo.indexOf("windows NT") !== -1)
            || (navInfo.indexOf("windows 95") !== -1)
            || (navInfo.indexOf("windows 98") !== -1)
            || (navInfo.indexOf("WinNT") !== -1)
            || (navInfo.indexOf("Win95") !== -1)
            || (navInfo.indexOf("Win98") !== -1)) {
        userPlat = "Win32";
    }
    else if (navInfo.indexOf("Win16") !== -1) {
        userPlat = "Win16";
    }
    //En el año 98 Apple sacó Mac OS 8.5 que sólo funcionaba en PPC
    //PPC PowerPC es una arquitectura antigua de procesador
    else if (navInfo.indexOf("Macintosh") !== -1) {
        userPlat = "PPC";
    }
    //68K es una familia de procesadores antigua
    else if (navInfo.indexOf("68K") !== -1) {
        userPlat = "68K";
    }
    return userPlat;
}

function getBrowserVersion() {
    var findIndex;
    var browserVersion = 0;
    var browser = getBrowserName();

    if (browser === "MSIE") {
        browserVersion = navigator.userAgent;
        findIndex = browserVersion.indexOf(browser) + 5;
        browserVersion = parseInt(browserVersion.substring(findIndex, findIndex + 1));
    }
    else {
        browserVersion = parseInt(navigator.appVersion.substring(0, 1));
    }
    return browserVersion;
}