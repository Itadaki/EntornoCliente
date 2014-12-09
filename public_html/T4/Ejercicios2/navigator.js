/*
 * Autor= Diego Rodríguez Suárez-Bustillo
 * Fecha= 30-oct-2014
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
    var userAgent = navigator.userAgent;
    //Chrome/38.0.2125.111
    //Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36
    if (userAgent.indexOf("Chrome") >= 0) {
        userAgent = "Chrome";
    }
    
    //Firefox 32.0
    //Mozilla/5.0 (Windows NT 6.1; WOW64; rv:32.0) Gecko/20100101 Firefox/32.0
    else if (userAgent.indexOf("Firefox") >= 0) {
        userAgent = "Firefox";
    }
    else {
        userAgent = "unknown";
    }
    return userAgent;
}

function getOS() {
    var userOS = "unknown";
    var navInfo = navigator.userAgent;

    if ((navInfo.indexOf("Windows NT") !== -1)
            || (navInfo.indexOf("Windows 95") !== -1)
            || (navInfo.indexOf("Windows 98") !== -1)
            || (navInfo.indexOf("WinNT") !== -1)
            || (navInfo.indexOf("Win95") !== -1)
            || (navInfo.indexOf("Win98") !== -1)) {
        if (navInfo.indexOf("WOW64") !== -1){
            userOS = "Win64";
        } else{
            userOS = "Win32";
        }
    }

    return userOS;
}

function getBrowserVersion() {
    var findIndex;
    var browserVersion = 0;
    var browser = getBrowserName();

    if (browser === "Chrome") {
        browserVersion = navigator.userAgent;
        findIndex = browserVersion.indexOf(browser) + 7;
        browserVersion = parseInt(browserVersion.substring(findIndex, findIndex + 2));
    }
    else if (browser === "Firefox"){
        browserVersion = navigator.userAgent;
        findIndex = browserVersion.indexOf(browser) + 8;
        browserVersion = parseInt(browserVersion.substring(findIndex, findIndex + 2));
    }
    return browserVersion;
}