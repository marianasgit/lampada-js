/*função  pura: não recebe dados e não possui dependencia com funcoes ou o fora dela, sendo melhor para fazer testes automatizados, 
com resultados previsiveis e código generico que pode ser usado em outros projetos*/

"use strict";

const lampada = document.getElementById("lampada")
const desligar = document.getElementById("desligar")
const ligar = document.getElementById("ligar")
const piscar = document.getElementById("piscar")
let idPiscar = null

const lampadaQuebrada = () => {
    return lampada.src.includes('quebrada')
}

const ligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = "./img/ligada.jpg"
    }
    
} 

const lampadaDesligada = () => {
    return lampada.src.includes('desligada')
}

const desligarLampada = () => {
    if (!lampadaQuebrada()) {
        lampada.src = "./img/desligada.jpg"
    }
} 

const ligarDesligar = () => {
    if (lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

const piscarLampada = () => {
    //setTimeout(ligarLampada, 1000) //metodo assincrono: o resto do programa não precisa parar para que ele execute sua funcao. O setTimeout só executa uma vez
    if (idPiscar == null) {
        idPiscar = setInterval(ligarDesligar, 500) // essa funcao determina o intervalo de tempo em que a acao acontecera
        piscar.textContent = 'Parar'                // essa estrutura de decisão está corrigindo o erro que dava ao clicar varias vezes no botão, e também está mudando o nome do botao
    } else {
        clearInterval(idPiscar)
        piscar.textContent = 'Piscar'
        idPiscar = null
    }
}

const quebrarLampada = () => (lampada.src = "./img/quebrada.jpg")

ligar.addEventListener("click", ligarLampada)

desligar.addEventListener("click", desligarLampada)

lampada.addEventListener('dblclick', quebrarLampada)

piscar.addEventListener('click', piscarLampada)