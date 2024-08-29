window.addEventListener('load', () => {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirma = document.getElementById('passConfirma')

    form.addEventListener('submit' , (e) => {

    e.preventDefault()
    validarCampos()
})

    const validarCampos = () => {
    // capturar los valores ingresados por el usuario

    const usuarioValor = usuario.value.trim()
    const emailValor = email.value.trim()
    const passValor = pass.value.trim()
    const passConfirmaValor= passConfirma.value.trim();

    if(!usuarioValor){
        validaFalla(usuario, 'Campo Vacio')
    } else {
        validaOk(usuario)
    }
// validando como email

if(!emailValor){
    validaFalla(email, 'Campo Vacio')
} else if(!validaEmail(emailValor)){
    validaFalla(email, 'El e-mail no es valido')
}else {
    validaOk(email)
}
// Validando como Password

const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/
if(!passValor){
    validaFalla(pass, 'Campo Vacio') 
} else if (passValor.lenght < 8){
        validaFalla(pass, 'Debe tener 8 caracteres como minimo')
} else if (!passValor.match(er)){
    validaFalla(pass, 'Debe tener al menos una may. una min. y un num')
}else {
    validaOk(pass)
}
//validando como password confirmacion
if(!passConfirmaValor){
    validaFalla(passConfirma, 'Confirme su password')
} else if(passValor !== passConfirmaValor){
    validaFalla(passConfirmaValor,'La password no coindide')
}else {
    validaOk(passConfirma)
}

}
const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje

    formControl.className = 'form-control falla'
}
const validaOk= (input, msje) => {
    const formControl= input.parentElement
    formControl.className = 'form-control Ok'
}

const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
})