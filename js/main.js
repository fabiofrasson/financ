// Efeito scroll Y Parallax 

const parallax = document.getElementsByClassName('pimg1')

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset 0.7 + "px"
})


// Linkar o botão 

var mybutton = document.getElementById("myBtn")

// Quando o user rolar para baixo 20px, mostra o botão

window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Quando o user clica no botão, volta para o topo da página

function topFunction() {
    document.documentElement.scrollTop = 0;
}