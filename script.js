const elementos = document.querySelectorAll("p, h1, .album-item");

function aparecer() {

    elementos.forEach((elemento) => {

        const topo = elemento.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            elemento.classList.add("mostrar");
        }

    });

}

window.addEventListener("scroll", aparecer);

aparecer();