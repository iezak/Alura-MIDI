function tocaSomTecla(idAudio) {
    const elemento = document.querySelector(idAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert("elemento não encontrado.")
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idSom = `#som_${instrumento}`

    tecla.onclick = function() {
        tocaSomTecla(idSom);
    };

    tecla.onkeydown = function(x) {
        if(x.keycode === 32 || x.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}