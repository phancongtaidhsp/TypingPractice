import React, { useState } from 'react';
import './App.css';
import Letter from './components/Letter';

let text = 'Stronger unpacked felicity to of mistaken.Fanny at wrong table ye in. Be on easily cannot innate in lasted months on. Differed and and felicity steepest mrs age outweigh. Opinions learning likewise daughter now age outweigh. Raptures stanhill my greatest mistaken or exercise he on although. Discourse otherwise disposing as it of strangers forfeited deficient.'
const arrLetter = text.split(''); 
const body = document.getElementById('bodyApp');

function App() {

  const [currentLetter, setCurrentLetter] = useState(0);

  body.onkeydown = (event) => {
    if(event.key === arrLetter[currentLetter]){
      setCurrentLetter(currentLetter+1)
    }
  }

  return (
    <div className="App">
      {arrLetter.map((letter,index) => {
        const isActived = index === currentLetter ? true : false;
        return <Letter key={index} isActived={isActived}>{letter}</Letter>
      })}
    </div>
    
  );
}

export default App;
