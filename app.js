//let numeroDoJogo = gerarNumeroAleatorio
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecretoDoJogo = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto){
    
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,"Brazilian Portuguese Female",{rate:1.2});
}
function exiberMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do numero secreto");
    exibirTextoNaTela("p","Escolha um numero entre 1 e 10");  
}
exiberMensagemInicial()

console.log(numeroSecretoDoJogo)
function verificarChute() {
    let chute = document.querySelector ("input").value;
    console.log(chute == numeroSecretoDoJogo);
    if (chute == numeroSecretoDoJogo){
        exibirTextoNaTela ("h1", "Acertou")
        let palavraTentativas = tentativas > 1? "tentativas" : "tentativa" ;
        let mensagemTentativa = ("p","Voce descobriu o numero secreto GOD em  " + tentativas +" " + palavraTentativas);
        exibirTextoNaTela ("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else{
    if(chute < numeroSecretoDoJogo){
        exibirTextoNaTela("p","O numero é maior");
    }else 
        exibirTextoNaTela("p","O numero secreto é menor");
}   tentativas++
    limparCampo();
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeElementosNaLista== numeroLimite){
        listaDeNumerosSorteados=[]
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
   }
}

function limparCampo(){
    chute= document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecretoDoJogo=gerarNumeroAleatorio
    limparCampo();
    tentativas=1
    exiberMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}







