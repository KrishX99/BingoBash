import React, { useState } from 'react';
import './box.css';

const Table = ({setGameMode , gameMode , playing , setPlaying}) => {

    //GAME LOGIC

    // if(gameMode === '3x3'){
    //     let table = [
    //         [false,false,false],
    //         [false,false,false],
    //         [false,false,false]
    //     ]
    //     let array = document.getElementById('3x3');
    //     var rowLength = array.rows.length;
    //     for(var i = 0 ; i< rowLength ; i++){
    //         var cells = array.rows.items(i).cells;
    //         var cellLength = cells.length;

    //         for(var j = 0 ; j<cellLength ; j++){
    //             console.log(cells.items[j].innerHTML);
    //         }
    //     }
    // }

    let collection = document.getElementById('3x3');
    console.log(collection)
    //     for(var i = 0 ; i< rowLength ; i++){
    //         var cells = array.rows.items(i).cells;
    //         var cellLength = cells.length;

    //         for(var j = 0 ; j<cellLength ; j++){
    //             console.log(cells.items[j].innerHTML);
    //         }
    //     }



    function handleConfirm(){
        var inputElements = document.getElementsByTagName('input');
        for(var i = 0 ; i<inputElements.length ; i++){
            inputElements[i].readOnly = true;
        }

        setPlaying(true);

        var confirmDiv = document.getElementsByClassName('confirm');
        confirmDiv[0].innerHTML = '<h5 class = "text-success">You can now proceed with your current Bingo Set</h5>'
    }

    function markThis(e){
        if(playing){
            const element = e.target;
            element.style.textDecoration = 'line-through';
        }
    }

    if(gameMode === '5x5')
    return(
        <div className="content">
            <table className="table-bordered" >
                <tbody>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                </tbody>
            </table>
            
            <div className="game_progress">
                <ul>
                    <li>B</li>
                    <li>I</li>
                    <li>N</li>
                    <li>G</li>
                    <li>O</li>
                </ul>
            </div>

            <div className="confirm mt-5">
                <p>If you are confident with the above selection. Click the button below</p>
                <button className = 'btn btn-danger text-center' onClick = {handleConfirm}>Confirm</button>
            </div>
        </div>
    );
    else if(gameMode === '4x4')
    return(
        <div className="content">
            <table className="table-bordered">
                <tbody>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                <tr>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                    <td><input type="text" onClick = {markThis} /></td>
                </tr>
                </tbody>
            </table>
            
            <div className="game_progress">
                <ul>
                    <li>E</li>
                    <li>A</li>
                    <li>S</li>
                    <li>Y</li>
                </ul>
            </div>

            <div className="confirm mt-5">
                <p>If you are confident with the above selection. Click the button below</p>
                <button className = 'btn btn-danger text-center' onClick = {handleConfirm}>Confirm</button>
            </div>
        </div>
    );
    else
    {
        return(
            <div className="content">
                <table className="table-bordered" id = '3x3'>
                    <tbody>
                    <tr>
                        <td><input type="text" onClick = {markThis} /></td>
                        <td><input type="text" onClick = {markThis} /></td>
                        <td><input type="text" onClick = {markThis} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" onClick = {markThis} /></td>
                        <td><input type="text" onClick = {markThis} /></td>
                        <td><input type="text" onClick = {markThis} /></td>
                    </tr>
                    <tr>
                        <td><input type="text" onClick = {markThis} /></td>
                        <td><input type="text" onClick = {markThis} /></td>
                        <td><input type="text" onClick = {markThis} /></td>
                    </tr>
                        
                    </tbody>
                </table>
                
                <div className="game_progress">
                    <ul>
                        <li>A</li>
                        <li>C</li>
                        <li>E</li>
                    </ul>
                </div>

                <div className="confirm mt-5">
                    <p>If you are confident with the above selection. Click the button below</p>
                    <button className = 'btn btn-danger text-center' onClick = {handleConfirm}>Confirm</button>
                </div>
            </div>
        );
    }
}

export default Table;