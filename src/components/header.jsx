import React from 'react';
import './header.css'

const header = ({setGameMode , gameMode , playing , setPlaying}) => {

    function changeGameMode(e){
        const mode = e.target.value;
        if(mode === '3x3')
            setGameMode('3x3');
        else if(mode === '4x4')
            setGameMode('4x4');
        else
            setGameMode('5x5');
    }

    if(playing === true){
        document.getElementById('select').style.display = 'none'
    }
    return(
        <div className = 'header text-center'>
            <div className="title mt-3">
                <h1>Bingo Bash</h1>
            </div>
            <div className="select ml-5" id = 'select'>
                <label htmlFor="gameMode" className = 'mr-1' style = {{fontSize:20}}>Game Mode:</label>
                <select onChange = {changeGameMode} >
                    <option value="3x3">3x3</option>
                    <option value="4x4">4x4</option>
                    <option value="5x5">5x5</option>
                </select>
            </div>
        </div>
    )
}

export default header;