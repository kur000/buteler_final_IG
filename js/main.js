let navIcon = document.getElementById('nav-icon');
let showNav = false;
let navbar = document.getElementById('navbar');
let body = document.body;


navIcon.addEventListener('click', () => {
    //condicion para usar la funcion solo en mobile
    if (window.innerWidth <= 768) {
        showNav =! showNav;
        body.classList.toggle('no-scroll');

        document.getElementById('header').style.borderBottom = ''

        if (showNav) {
            navbar.style.display = 'block' ;
            //uso un setTimeOut para que la animacion se renderize bien
            setTimeout(() => {
                navbar.classList.add('show');
            }, 200);
        } else {
            navbar.classList.remove('show');
            setTimeout(() => {
            navbar.style.display = 'none' ;
            }, 100);        }
    }
})
let urlEntradas;
//eventlistener para cada boton de entradas del sitio
let entradas = document.querySelectorAll('.entradas');
entradas.forEach(entrada => {
        entrada.addEventListener('click', () => {
        let path = window.location.pathname;

        if (path.includes('../cartelera/')) {
             urlEntradas = "entradas.html";
        } else {
             urlEntradas = "../cartelera/entradas.html";
        }
        window.location.href = urlEntradas;
        console.log('click');
    })
})

//eventlistener con el que prevengo que el nav quede en display:none si hay resizing de la ventana
window.addEventListener('resize', () => {

    if (window.innerWidth > 768) {
        navbar.style.display = 'block' ;
    }

})

//codigo del slideshow automatico
let slideIndex = 0;
showSlide();

function showSlide() {
    let slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    slideIndex ++;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    slides[slideIndex].style.display = 'block';

    setTimeout(showSlide, 4000);
}

//validador de forms
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

