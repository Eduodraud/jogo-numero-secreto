let listaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1});

}

console.log(numeroSecreto);

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolhha um número entre 1 e 10');
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value; 
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

        exibirTextoNaTela('p', mensagemTentativa)

        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        exibirTextoNaTela('h1', 'Ainda não!');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor');    
        } 
        else {
            exibirTextoNaTela('p', 'O número é maior');

        }
    
        tentativas++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio(){
    let NumeroEscolhido = parseInt(Math.random()*10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
       listaDeNumerosSorteados = [] 
    }


    if (listaDeNumerosSorteados.includes(NumeroEscolhido)){
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(NumeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEscolhido;
    }
}
 
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}