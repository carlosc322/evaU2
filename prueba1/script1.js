//validar nombre, debe contener solo letras y no ser vacio
datos = []
function validar(){
let eNombre = document.getElementById('nombre')
let vNombre = eNombre.value
console.log(vNombre)
let errorNombre = document.getElementById('errorNombre')
let nombre = validarDatos(eNombre,vNombre,errorNombre)
if (nombre == "exit"){
    let p ={
        nombre:vNombre
    }
    console.log(p)
}
}
function validarDatos(elemento,valor,error){
    if(valor.Trim==''){
        error.innerHTML = 'El campo nombre no debe ir vacio'
        return false

}}











//validar correo: Debe tener solo un @ y terminar en .cl