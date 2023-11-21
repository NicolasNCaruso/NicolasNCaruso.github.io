//Validaciones:
function validacionTiempo(pDuracion){
    let validacionDuracion = false;
    let carPduracion = pDuracion.trim().length;
    if (carPduracion >0){
        if (!isNaN(pDuracion)) {
            let pDuracionN = Number(pDuracion);
            if (pDuracionN >0) {
                validacionDuracion = true;
            }
        }
    }
    return validacionDuracion;
}
//Calculos:
function duracion(pUsuario, pCantidadDuracion, pDias){
    let duracionTotales= pCantidadDuracion * pDias;
    let tiempo = 0;
    if (pUsuario == true){
        minutos= duracionTotales * 500 + duracionTotales * 200;
    }
    else {
        minutos = duracionTotales * 500;
    }
    return minutos;
}
function horasSueño(pHorasSueño){
    let horasTotalesSueño = pHorasSueño + ((pHorasSueño / 100) * 20);
    return horasTotalesSueño;
}

//Arrays y objetos:
//Lista de Tiempos guardadas:
let TiemposGuardadas= new Array();
//Objeto Tiempo:
class Tiempos{
    static numeroTiempo=1;
    constructor(){
        this.numero= Tiempos.numeroTiempo++;
        this.HorasTotal;
        this.HorasCocina;
        this.HorasSueño;
    }
}
//Agregar a la lista
function guardarTiempoDAYS(pHorasTotal,pHorasMinutos, pHorasSueño) {
    let nuevoTiempoDAYS = new Tiempos();
    nuevoTiempoDAYS.horasTotal = `DAYS ${pHorasTotal}`;
    nuevoTiempoDAYS.horasMinutos = `DAYS ${pHorasMinutos}`;
    nuevoTiempoDAYS.horasSueño = `DAYS ${pHorasSueño}`;
    TiemposGuardadas.push (nuevoTiempoDAYS);
}
function guardarTiempoHRS(pHorasTotal,pHorasMinutos, pHorasSueño) {
    let nuevoTiempoHRS = new Tiempos();
    nuevoTiempoHRS.horasTotal = `HRS ${pHorasTotal}`;
    nuevoTiempoHRS.horasMinuto = `HRS ${pHorasMinutos}`;
    nuevoTiempoHRS.horasSueño = `HRS ${pHorasSueño}`;
    TiemposGuardadas.push (nuevoTiempoHRS);
}
function verHorasTotalesdelUltimoTiempo(pLista){
    let verHorasTotalesdelUltimoTiempo;
    for (let i=pLista.length-1;i <=pLista.length-1; i++){
        let Horas = pLista[i];
        if (Horas !== undefined) verHorasTotalesdelUltimoTiempo= Horas.horasTotales;
    }
    return verHorasTotalesdelUltimoTiempo;
}
function verhorasSueñoUltimoTiempo(pLista){
    let horasSueñoUltimoTiempo = 0;
    for (let i=pLista.length-1;i <=pLista.length-1; i++){
        let horas = pLista[i];
        if (horas !== undefined) horasSueñoUltimoTiempo = horas.horasSueño;
    }
    return horasSueñoUltimoTiempo;
}
function verhorasMinutosUltimoTiempo(pLista){
    let horasMinutosUltimoTiempo = 0;
    for (let i=pLista.length-1;i <=pLista.length-1; i++){
        let horas = pLista[i];
        if (horas !== undefined) horasMinutosUltimoTiempo = horas.horasMinutos;
    }
    return horasMinutosUltimoTiempo;
}

function VerTodosLosTiemposGuardados(pLista){
    let mostrar = "";
    for (let i=0; i < pLista.length; i++){
        let tiempo = pLista[i];
        mostrar += `Tiempo ${tiempo.numero}: <br>
                    Las horas de Duracion es: ${tiempo.horasDuracion} <br>
                    Las horas de Minutos es: ${tiempo.horasMinutos}. <br>
                    Las horas de Sueño es: ${tiempo.horasSueño} <br>`
        }
        return mostrar;
}

function guardarDatosLocalStorage(pHorasTotales, pMinutos, pSueño){
    localStorage.horasTotales = pHorasTotales;
    localStorage.minutos = pMinutos;
    localStorage.sueño = pSueño;
}

function recuperarDatosLocalStorage() {
    if ((localStorage.horasTotales !== undefined) && (localStorage.cocina !== undefined) && localStorage.sueño !== undefined) {
        return console.log(`horas totales: ${localStorage.horastotales} Corresponde a cocina: 
        ${localStorage.cocina} Corresponde a sueño  ${localStorage.sueño}`);
    } else {
        return console.log("Ha ocurrido un error");
    }
}
//JSON
// funcion para cuando la llamada es exitosa
function exito() {
    var datos = JSON.parse(this.responseText); //convertir a JSON
    console.log(datos);
}

// funcion para la llamada fallida
function error(err) {
    console.log('Solicitud fallida', err); //los detalles en el objecto "err"
}

// Solicitud GET (Request).
