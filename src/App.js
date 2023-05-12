import React, { Component } from 'react';
import './estilo.css'

class App extends Component{
        constructor(props){
          super(props)
          this.state = {
            textoFrase: " "
          };
          this.quebraBiscoito = this.quebraBiscoito.bind(this);
          this.frases = ["Não limite os seus desafios. Desafie os seus limites.","Viver cada dia como se fosse o último é uma ótima oportunidade para aprender a amar cada segundo do seu dia.",
          "Se o plano não funcionar, mude o plano, não a meta.","Que os seus sonhos te levem para onde o seu coração seja feliz.","O que você procura está procurando você.","Uma meta é um sonho com um prazo.",
          "Tente mover o mundo - o primeiro passo será mover a si mesmo.","Disciplina é a ponte entre metas e realizações.","Sorte é o que acontece quando a preparação encontra a oportunidade.",
        "Se você não vivenciar o fracasso, não saberá reconhecer quando o sucesso realmente chegar.","Uma longa viagem começa com um único passo.","Você precisa fazer aquilo que pensa que não é capaz de fazer.","É muito fácil conhecer palavras de motivação, o difícil é aplicá-las na sua vida.",
      "Se você quiser que as coisas mudem, primeiro você tem que mudar.","A chave do sucesso é começar antes de estar pronto.","Algumas pessoas querem que aconteça, algumas esperam que aconteça, outras fazem acontecer.","Não tenha medo de desistir do que é bom para ir atrás do que é ótimo.","As realizações de hoje eram as impossibilidades de ontem.",
    "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.","Você é a força criadora na sua vida. Nada lhe acontece sem a sua participação.",]; 
        }
      
        quebraBiscoito(){
          let state = this.state;
          let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
          state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
          this.setState(state);
  
      }
  render(){
    return(
      <div className="container">
          <img className="img" src={require('./Assets/biscoito.png') }/>
          <Botao acaoBtn={this.quebraBiscoito} className='Botao'/>
          <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}
class Botao extends Component{
  render(){
      return(
          <div>
              <button onClick={this.props.acaoBtn}>Abrir biscoito</button>
          </div>
      );
  }
}
export default App;
