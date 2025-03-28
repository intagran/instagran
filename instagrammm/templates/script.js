document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupLink = document.querySelector('.signup-link a');

    signupLink.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(loginForm);
        fetch('/login', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                console.log('Inicio de sesión simulado (ver consola del servidor)');
                // Aquí podrías mostrar un mensaje de éxito simulado
            }
        })
        .catch(error => {
            console.error('Error al enviar el formulario de inicio de sesión:', error);
            // Aquí podrías mostrar un mensaje de error
        });
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(signupForm);
        fetch('/signup', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.redirected) {
                window.location.href = response.url;
            } else {
                console.log('Registro simulado (ver consola del servidor)');
                // Aquí podrías mostrar un mensaje de éxito simulado
            }
        })
        .catch(error => {
            console.error('Error al enviar el formulario de registro:', error);
            // Aquí podrías mostrar un mensaje de error
        });
    });
});