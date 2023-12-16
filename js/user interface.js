//Eventos
function eventosCalculadorTiempo () {
    document.querySelector("#btn").addEventListener("click" , userInterfaceCalculadorTiempo);
    document.querySelector("#btn2").addEventListener("click" , userInterfaceGuardarTiempo);
    document.querySelector("#btn3").addEventListener("click" , UserInterfaceVerUltimoTiempo);
    document.querySelector("#btn4").addEventListener("click" , UserInterfaceVerTodosLosTiemposGuardados);
 
}
eventosCalculadorTiempo();
//UI:
function userInterfaceCalculadorTiempo(){
    let duracion = document.querySelector("#txtValorUno").value;
    let cocina = document.querySelector("#txtValorDos").value;
    let tareas = document.querySelector("#checkBox1").checked;
    let horas = document.querySelector("#txtValorTres").value;
    let horasDAYS = document.querySelector("#checkBox2").checked;
    let mensaje = "";
    let duracionValidadas = validacionTiempo(duracion);
    let cocinaValidados = validacionTiempo(cocina);
    let horasValidado = validacionTiempo(horas);
    if (duracionValidadas == true && cocinaValidados == true && horasValidado == true){
        let duracionN = Number(duracion);
        let cocinaN = Number(cocina);
        let horasN = Number(horas);
        let minutos = Number(tareas, cocinaN, horasN);
        let sueño= Number(horasN);
        let horasTotalHRS = minutos + sueño + cocina + duracion  ;
        if (horasDAYS == true) {
            minutos = (minutos/1)
            sueño = (sueño/1)
            cocina = (cocina/1)
            duracion = (duracion/1)
            let horasTotalDAYS= minutos + sueño + cocina + duracion;
            mensaje = `El Horas total en DAYS es de DAYS ${horasTotalDAYS.toFixed(0)} <br>
            Incluye DAYS ${minutos.toFixed(0)} correspondiente a minutos <br>
            Incluye DAYS ${sueño.toFixed(0)} correspondiente a sueño <br>
            Incluye DAYS ${cocina.toFixed(0)} correspondiente a cocina <br>
            Incluye DAYS ${duracion.toFixed(0)} correspondiente a duracion `; 
        }
        else {
            let horasTotalHRS= minutos + sueño + cocina + duracion;
            mensaje = `Las horas totales en HRS es de ${horasTotalHRS.toFixed(0)} <br> 
            Incluye HRS ${minutos.toFixed(0)} correspondiente a tareas  <br>
            Incluye HRS ${sueño.toFixed(0)} correspondiente a sueño <br>
            Incluye HRS ${cocina.toFixed(0)} correspondiente a cocina <br>
            Incluye HRS ${duracion.toFixed(0)} correspondiente a durecion `;
        }
    }
    else {
        mensaje = "La duracion, Cocina o sueño ingresados no son validos, verifique.";
    }
    document.querySelector("#divMostrarResultado").innerHTML = mensaje;
} 
function userInterfaceGuardarTiempo(){
    let duracion = document.querySelector("#txtValorUno").value;
    let cocina = document.querySelector("#txtValorDos").value;
    let tareas = document.querySelector("#checkBox1").checked;
    let horas = document.querySelector("#txtValorTres").value;
    let horasDAYS = document.querySelector("#checkBox2").checked;
    let mensaje = "";
    let duracionValidadas = validacionTiempo(duracion);
    let cocinaValidados = validacionTiempo(cocina);
    let horasValidado = validacionTiempo(horas);
    if (duracionValidadas == true && cocinaValidados == true && horasValidado == true){
        let duracionN= Number(duracion);
        let cocinaN= Number(cocina);
        let horasN = Number(horas);
        let minutos = Number(tareas, duracionN, horasN);
        let sueño= Number(sueñoN);
        let horasTotalHRS = minutos + sueño;
        if (horasDAYS == true) {
            minutos = (minutos/1)
            sueño = (sueño/1)
            cocina = (cocina/1)
            duracion = (duracion/1)
            let horasTotalDAYS = minutos + sueño + cocina + duracion;
            guardarTiempoDAYS(horasTotalDAYS.toFixed(2),minutos, sueño, cocina, duracion);
            mensaje = `Se guardo el tiempo correctamente en DAYS.`;
            //Local storage
            guardarDatosLocalStorage(horasTotalDAYS.toFixed(2),minutos, sueño, cocina, duracion);
            recuperarDatosLocalStorage();
            SetrecuperarDatosLocalStorage();
        }
        else {
            guardarTiempoHRS(horasTotalHRS.toFixed(2), minutos, sueño, cocina, duracion);
            mensaje = `Se guardo el tiempo correctamente en HRS.`;
            //Local storage
            guardarDatosLocalStorage(horasTotalHRS.toFixed(2),minutos, sueño, cocina, duracion);
            recuperarDatosLocalStorage();
            SetrecuperarDatosLocalStorage();
        }
    }
    else {
        mensaje = "La duracion, cocina o sueño total ingresados no son validos, verifique.";
    }
    document.querySelector("#divMostrarResultado").innerHTML = mensaje;
}
function UserInterfaceVerTodosLosTiemposGuardados(){
    let resultado =VerTodaslashorasGuardadas(HorasGuardados);
    let mensaje = "";
    if (resultado !== ""){
        mensaje += `Los tiempos guardados hasta el momento son: <br>`;
        mensaje += resultado;
    }
    else{
        mensaje = "No se encontro ningun tiempo guardado hasta el momento.";
    }
    document.querySelector("#divMostrarResultado").innerHTML = mensaje;
}
function UserInterfaceVerUltimoTiempo() {
    let mensaje = "";
    let HorasTotales = verHoraTotalUltimotTiempo(HorasGuardadas);
    let tiempoSueño = verHoraSueñoUltimoTiempo(HorasGuardadas);
    let tiempoCocina = verHoraCocinaUltimoTiempo(HorasGuardadas);
    let tiempoMinutos =  verHoraMinutosUltimotiempo(HorasGuardadas);
    if (horasTotales !== undefined && tiempoSueño !== undefined && tiempoMinutos !== undefined && tiempoCocina !== undefined){
        mensaje = `Las horas del ultimo tiempo guardado es: <br>
        Horas Totales: ${HorasTotales} <br>
        Horas Sueño ${HorasSueño} <br>
        Horas Cocina ${HorasCocina} <br>
        Horas Minutos ${horasMinutos}. <br>`;
    } else {
        mensaje = "No se encontro ningun tiempo guardado hasta el momento.";
    }
    document.querySelector("#divMostrarResultado").innerHTML = mensaje;
}
