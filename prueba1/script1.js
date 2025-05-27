
//Enlace al video: https://youtu.be/j1w-53MHaB4//

//validar nombre, debe contener solo letras y no ser vacio
datos = []
function validar(){
let eNombre = document.getElementById('nombre')
let vNombre = eNombre.value
let errorNombre = document.getElementById('errorNombre')
let eEmail = document.getElementById('email')
let vEmail = eEmail.value
let errorCorreo = document.getElementById('errorEmail')
let nombre = validarDatosN(vNombre,errorNombre)
let correo = validarDatosC(vEmail,errorCorreo)
    if(nombre=='exito' && correo == true){
        let p ={
        nombre:vNombre,
        email:vEmail
    }
        datos.push(p)
        eNombre.value = ''
        eEmail.value = ''
        cargarDatos()
    }else if (correo == false){
        alert('el correo debe de finalizar en .cl')
        errorCorreo.innerText='El correo que ingreso no termina en .cl';
        errorCorreo.style.color = 'red'
        errorCorreo.innerText= ''
//validaciones//
}}
function validarDatosN(valor,error){
    console.log(valor)
    if(valor.length<=3){
        error.innerText = 'El campo nombre no debe ir vacio'
        error.style.color = 'red'
        alert('el campo nombre debe tener minimo 4 digitos')
        return "falla"
    }else{
        error.innerText=''
        return "exito"
    }
}
function validarDatosC(valorC,errorC){
    let correo = /^[^\s@]+@[^\s@]+\.cl$/;
    let valorCorreo = correo.test(valorC)
    console.log(valorCorreo)
    return valorCorreo}
//----------//
function cargarDatos(){
    let mapDatos = datos.map((p,index)=>{
        return "<tr><td>"+p.nombre+
        "</td><td>"+p.email+
        "</td><td><button type='button' value='"+index+"'onclick='eliminar("+index+")'>Eliminar</button>"+
        "<button onclick='actualizarFomulario("+index+")'</button>Actualizar</td></tr>"
        
    })
let cuerpoT = document.getElementById('cuerpoTabla')
let datosRecup = mapDatos.join('')
cuerpoT.innerHTML= datosRecup
}
//validar correo: Debe tener solo un @ y terminar en .cl

function eliminar(indice){
    datos = datos.filter((p,index)=>{
        if(index != indice){
            return p
        }
    })
    cargarDatos();
}
function actualizarFomulario(indice){
    let nombreA = document.getElementById('nombreA')
    let emailA = document.getElementById('emailA')
    datosFil = datos.filter((p,index)=>{
        if(index == indice){
            return p
        }
    })
    nombreA.value = datosFil[0].nombre
    emailA.value = datosFil[0].email
    let buttonA = document.getElementById('buttonA')
    buttonA.value = indice
}
function actualizar(){
    let eNombre = document.getElementById('nombreA')
    let vNombre = eNombre.value
    let eEmail = document.getElementById('emailA')
    let vEmail = eEmail.value
    let buttonA = document.getElementById('buttonA')
    let indice = buttonA.value
    datos = datos.map((p,index)=>{
        if(index == indice){
            return {nombre:vNombre,
            email:vEmail}
        }else{
            return p
        }
    })
    cargarDatos()
}