let botao = document.querySelector("#botao");
let P2 = document.querySelector("#P2");

let recebeClasse;

class anotacao{
  constructor(conteudo){
    this.conteudo=conteudo;
  }
  
}

 function criarAnotacao(texto){
    let div = document.createElement("div");
    div.setAttribute("class","caixasAnotacoes");
    div.textContent = texto;
    return div;
  }
  

botao.addEventListener("click", ()=>{
  cont = document.querySelector("#texto").value;
  recebeClasse = new anotacao(cont);
  
  P2.appendChild(criarAnotacao(recebeClasse.conteudo));
 
  
});
