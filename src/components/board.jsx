import React from 'react';
import { Link } from 'react-router-dom';

import { Storage } from './../storage/storage';
import { Box } from './board-box';
import * as utils from '../utils/functions';

export class Board extends React.Component {

    storage = new Storage();

    constructor( props ){
        super( props );

        this.state = {
            boxes   : Array(9).fill(null),
            history : [],
            xIsNext : true 
        }
    }

    

    handleBoxClick(index) {
        const boxes = this.state.boxes.slice();
        let history = this.state.history;

        // stop the game if the board contains winning combination
        if(utils.findWinner(boxes) || boxes[index]){
            return;
        }
        // stop the game if all boxes are clicked(filled)
        if(utils.areAllBoxesClicked(boxes) === true){
            return
        }

        // mark the box either as 'x' or 'o'
        boxes[index] = this.state.xIsNext? 'x': 'o';
        // add move to game history
        history.push(this.state.xIsNext? 'x' : 'o');
        // update component state with new data
        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })

    }

    handleBoardStart = ()=> {
        this.setState({
            boxes   : Array(9).fill(null),
            history : [],
            xIsNext : true 
        })
    }

    render(){
        // get winner (if there any)
        const winner = utils.findWinner(this.state.boxes);
        // are all boxes checked?
        const isFilled = utils.areAllBoxesClicked(this.state.boxes);
        // status message
        let status = '';
        if( winner ){
            // if winner exists, create status message
            status = `The winner is: ${winner} !!!`;
            // push data about the game to storage
            this.storage.update(['Game drawn']);
        } else {
            // if there is no winner and game is not drawn, ask the next player to make a move
            status = `It is ${(this.state.xIsNext ? 'x' : 'o')}'s turn.`
        }

        return (
            <>
            <Link to="/" className="board-link">Go back to scoreboard</Link>
            {/* the game board */}
            <div className="board-wrapper">
                <div className="board">
                    <h2 className="board-heading"> { status }</h2>
                    <div className="board-row">
                        <Box value={ this.state.boxes[0] } onClick={()=> this.handleBoxClick(0)} ></Box>
                        <Box value={ this.state.boxes[1] } onClick={()=> this.handleBoxClick(1)} ></Box>
                        <Box value={ this.state.boxes[2] } onClick={()=> this.handleBoxClick(2)} ></Box>
                    </div>
                    <div className="board-row">
                        <Box value={ this.state.boxes[3]} onClick={()=> this.handleBoxClick(3)} ></Box>
                        <Box value={ this.state.boxes[4]} onClick={()=> this.handleBoxClick(4)} ></Box>
                        <Box value={ this.state.boxes[5]} onClick={()=> this.handleBoxClick(5)} ></Box>
                    </div>
                    <div className="board-row">
                        <Box value={ this.state.boxes[6]} onClick={()=> this.handleBoxClick(6)} ></Box>
                        <Box value={ this.state.boxes[7]} onClick={()=> this.handleBoxClick(7)} ></Box>
                        <Box value={ this.state.boxes[8]} onClick={()=> this.handleBoxClick(8)} ></Box>
                    </div>
                </div>
                <div className="board-history">
                    <h2 className="board-heading"> Moves history: </h2>
                    <ul className="board-historyList">
                        { this.state.history.length === 0 && <span>No moves to show. </span>}
                        { this.state.history.length !== 0 &&  this.state.history.map((move, index) => {
                            return <li key={ index }> Move { index + 1 }</li>
                        })}
                    </ul>
                </div>
                
                { winner && <div className="board-footer"> 
                        <button className="btn" onClick={ this.handleBoardStart }>Start new Game</button>
                </div>}

            </div>
            </>
        );
    }   


}