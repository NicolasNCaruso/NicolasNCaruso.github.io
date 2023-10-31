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
        let duracionN= Number(duracion);
        let cocinaN= Number(cocina);
        let horasN = Number(horas);
        let minutos = minutos(tareas, cocinaN, horasN);
        let sueño= horassueño(horasN);
        let horasTotal = minutos + sueño;
        if (horasDAYS == true) {
            minutos = (minutos/60)
            sueño = (sueño/60)
            let horasTotalDAYS= minutos + sueño;
            mensaje = `El Horas total en DAYS es de DAYS ${horasTotalDAYS.toFixed(0)} <br>
            Incluye DAYS ${minutos.toFixed(0)} correspondiente a minutos <br>
            Incluye DAYS ${sueño.toFixed(0)} correspondiente a sueño`;
        }
        else {
            mensaje = `Las horas totales en HRS es de $${horasTotal.toFixed(0)}. <br> 
            Incluye $${minutos.toFixed(0)} correspondiente a minutos  <br>
            Incluye $${sueño.toFixed(0)} correspondiente a sueño`;
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
    let duracionValidadas = validacionPresupuesto(duracion);
    let cocinaValidados = validacionPresupuesto(cocina);
    let horasValidado = validacionPresupuesto(horas);
    if (duracionValidadas == true && cocinaValidados == true && horasValidado == true){
        let duracionN= Number(duracion);
        let cocinaN= Number(cocina);
        let horasN = Number(horas);
        let minutos = minutos(tareas, duracionN, horasN);
        let sueño= horassueño(duracionN);
        let horasTotal = minutos + sueño;
        if (horasDAYS == true) {
            minutos = (minutos/60)
            sueño = (sueño/60)
            let horasTotalDAYS = minutos + sueño;
            guardariTempoDAYS(horasTotalesDAYS.toFixed(2),minutos, sueño);
            mensaje = `Se guardo el tiempo correctamente en DAYS.`;
            //Local storage
            guardarDatosLocalStorage(horasTotalesDAYS.toFixed(2),minutos, sueño);
            recuperarDatosLocalStorage();
        }
        else {
            guardarPresupuesto$UY(costoTotal.toFixed(2), salario, materiales);
            mensaje = `Se guardo el presupuesto correctamente en $UY.`;
            //Local storage
            guardarDatosLocalStorage(costoTotal.toFixed(2),salario, materiales);
            recuperarDatosLocalStorage();
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
    let tiemposueño = verHoraSueñoUltimoTiempo(HorasGuardadas);
    let costoSalarios =  verHoraMinutosUltimotiempo(HorasGuardadas);
    if (horasTotales !== undefined && horassueño !== undefined && horasmiutos !== undefined){
        mensaje = `Las horas del ultimo tiempo guardado es: <br>
        Horas Totales: ${HorasTotales} <br>
        Horas Sueño ${horasSueño} <br>
        Horas Minutos ${horasMinutos}. <br>`;
    } else {
        mensaje = "No se encontro ningun tiempo guardado hasta el momento.";
    }
    document.querySelector("#divMostrarResultado").innerHTML = mensaje;
}