function verificarSeOChutePossuiUmValorValido(chute){

    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += "<div >valor invalido</div>"
        return 
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>[ERRO] Valor Invalido: o numero tem que ser entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você acertou! </h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btnJogar">Jogar Novamente</button>
        `
        return
    } else if(numero < numeroSecreto){
        elementoChute.innerHTML += `<div class="maior-menor">o numero secreto e maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    } else{
        elementoChute.innerHTML += `<div class="maior-menor">o numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>`
    }


}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener("click", e => {
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})