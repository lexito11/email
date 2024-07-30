(function(){
    email.init('0_d-TjUrJjsoiO3Ra')
})();

const correo = document.getElementById('formulario-contacto');
correo.addEventListener('submit', function(event){
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value

    let templateParams = { username: username, email: email,msg: msg };

    emailjs.send('service_3wgwmgm','template_39¡e49b',templateParams)
    .then(function(response) {
        console.log('seceso', response.status, response.tex)
        alert("El mensaje se envio correctamente");
    }, function(error){
        console.log("Error de envio", error);
        alert("Ocurrio un error al enviar el mensaje.");
    })
})