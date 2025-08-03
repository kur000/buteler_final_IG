function validate() {
    
    let name = document.contactform.name.value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let regexMail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

    if (name.length < 3) {
        alert('Por favor, introduzca un nombre.');
        name.focus();
        return false;
    }
    if (message.length < 20) {
        alert('Los mensajes deben ser de al menos 20 caracteres. vuelva a intentarlo.');
        message.focus();
        return false;
    }

    if (!(regexMail.test(email))) {
        alert('Por favor, introduzca un email valido.')
        return false;
    }

}