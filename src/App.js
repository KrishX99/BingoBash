import React , {useState} from 'react';
import './App.css';
import Header from './components/header.jsx';
import Table from './components/box'

const App = () => {

  const [gameMode , setGameMode] = useState('3x3');
  const [playing , setPlaying] = useState(false);
  return(
    <div className="container">
      <Header 
        setGameMode = {setGameMode} gameMode = {gameMode}
        playing = {playing} setPlaying = {setPlaying}
      />
      <Table 
        setGameMode = {setGameMode} gameMode = {gameMode}
        playing = {playing} setPlaying = {setPlaying}
      />
    </div>
  );
}

export default App;
