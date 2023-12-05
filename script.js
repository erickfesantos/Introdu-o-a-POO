let botao = document.querySelector("#botao");
let P2 = document.querySelector("#P2");

let recebeClasse, tipoDeLembrete;

class anotacao{
  constructor(conteudo){
    this.conteudo=conteudo;
  }
}

class anotacaoTipo extends anotacao{
  constructor(conteudo, tipo){
    super(conteudo);
    this.tipo=tipo;
  }
}


 function criarAnotacao(texto, tipo){
    let div = document.createElement("div");
    div.setAttribute("class","caixasAnotacoes");
    div.textContent = `Tipo: ${tipo} - ${texto}`;
    
    
    return div;
  }
  

botao.addEventListener("click", ()=>{
  cont = document.querySelector("#texto").value;
  tipoDeLembrete = prompt("Informe o tipo de lembrete");
  
  recebeClasse = new anotacaoTipo(cont, tipoDeLembrete);
  
  P2.appendChild(criarAnotacao(recebeClasse.conteudo, recebeClasse.tipo));
 
  
});
