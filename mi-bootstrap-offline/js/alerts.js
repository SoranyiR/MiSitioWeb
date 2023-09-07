const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


let inputNombre = document.getElementById("inputNombre");
const alertTrigger = document.getElementById('liveAlertBtn')

if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    if (inputNombre.value == ""){
        appendAlert('El usuario o la contraseña mo concuerdan. verifique, por favor.!', 'danger')
    }
    else{
    appendAlert('Informacion alamacenada con exito', 'success');
    alertTrigger.classList.add("disabled");
  }
})
}