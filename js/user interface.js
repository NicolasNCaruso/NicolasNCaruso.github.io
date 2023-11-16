//Eventos
function eventosCalculadorTiempo () {
    document.querySelector("#btn").addEventListener("click" , userInterfaceCalculadorTiempo);
 
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
        let horasTotalHRS = minutos + sueño + cocina + duracion;
        if (horasDAYS == true) {
            minutos = (minutos/60)
            sueño = (sueño/8)
            cocina = (cocina/1)
            duracion =(duracion/3)

            let horasTotalDAYS= minutos + sueño + cocina + duracion;
            mensaje = `El Horas total en DAYS es de DAYS ${horasTotalDAYS.toFixed(0)}. <br>
            Incluye DAYS ${minutos.toFixed(0)} correspondiente a minutos <br>
            Incluye DAYS ${sueño.toFixed(0)} correspondiente a sueño <br>
            Incluye DAYS ${cocina.toFixed(0)} correspondiente a cocina <br>
            Incluye DAYS ${duracion.toFixed(0)} correspondiente a duracion `; 
        }
        else  {

        let horasTotalHRS= minutos + sueño + cocina + duracion;
            mensaje = `Las horas totales en HRS es de  HRS ${horasTotalHRS.toFixed(0)}. <br> 
            Incluye HRS ${minutos.toFixed(0)} correspondiente a minutos  <br>
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
        let sueño= Number(duracionN);
        let horasTotal = minutos + sueño + cocina + duracion;
    }
    if (horasDAYS == true) {
            minutos = (minutos/60)
            sueño = (sueño/60)
            let horasTotalDAYS = minutos + sueño;
            guardariTempoDAYS(horasTotalDAYS.toFixed(2),minutos, sueño, cocina, duracion);
            mensaje = `Se guardo el tiempo correctamente en DAYS.`;
            //Local storage
            guardarDatosLocalStorage(horasTotalDAYS.toFixed(2),minutos, sueño, cocina, duracion);
            recuperarDatosLocalStorage();
        }
        else {
            guardarTiempoHRS(horasTotal.toFixed(2), minutos, sueño, cocina, duracion);
            mensaje = `Se guardo el tiempo correctamente en HRS.`;
            //Local storage
            guardarDatosLocalStorage(horasTotal.toFixed(2),minutos, sueño, duracion);
            recuperarDatosLocalStorage();
        } 
    }