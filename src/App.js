import React, { Component } from 'react';
import './App.css';
import Word from './components/Word/Word';
import Letter from './components/Letter/Letter';

class App extends Component {

  constructor(props){
    super(props);
    let text = 'Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh. Opinions learning likewise daughter now age outweigh. Raptures stanhill my greatest mistaken or exercise he on although. Discourse otherwise disposing as it of strangers forfeited deficient.'
    this.arrLetter = text.split('');
    this.arrWord = text.split(' ').map(word => [...word.split(''),' ']);
    this.arrWord[this.arrWord.length-1].pop();
    this.state = {
      currentLetter: 0
    };
  }

  componentDidMount(){
    const body = document.getElementById('bodyApp');
    body.onkeydown = (event) => {
      if(event.key === this.arrLetter[this.state.currentLetter]){
        this.setState({
          currentLetter: this.state.currentLetter + 1
        })
      }
    }
  }

  render(){
    const { currentLetter } = this.state;
    let counter = -1;
    return (
      <div className="App">
        {this.arrWord.map(word =>
          <Word key={counter}>
            {word.map(letter => {
              counter++;
              return <Letter currentLetter={currentLetter} index={counter} key={counter}>{letter}</Letter>
            })}
          </Word>
        )}
      </div>
    );
  }
}

export default App;
