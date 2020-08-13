import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      boardCell: this.createBoard(),
    };
    // TODO: set initial state
  }
  static defaultProps = {
     ncols:5, 
     nrows: 5,
     chanceLightStartsOn: 0.25
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  createBoard() {
    let board = [];
    do {
      let rowValues = [];
      for (let index = 0; index < this.props.nrows; index++) {
        let chance = Math.random() < this.props.chanceLightStartsOn;
        if(chance===true)
        {rowValues.push(true)}
        else{rowValues.push(false)}
      }
      board.push(rowValues);
    } while (board.length < this.props.nrows);
    // TODO: create array-of-arrays of true/false values
    return board;
  }
  /** handle changing a cell: update board & determine if winner */
  flipCellsAround(coord) {
    console.log("Flopping!",coord)
    let { ncols, nrows } = this.props;
    let boardCell = this.state.boardCell;
    let [y, x] = coord.split("-").map(Number);
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        boardCell[y][x] = !boardCell[y][x];  
      }
    }
    // TODO: flip this cell and the cells around it
    // win when every cell is turned off
    // TODO: determine is the game has been won
    flipCell(y,x);
    flipCell(y,x-1);
    flipCell(y,x+1);
    flipCell(y-1,x);
    flipCell(y+1,x);
    
    let win = boardCell.forEach(row => {
      row.forEach(cell => {
        if(cell === false){
        console.log(false)
        return true
       }
      });   
    });
    let winner = win;
    console.log(win)
    this.setState({boardCell:boardCell,hasWon:winner});
  }
  /** Render game board or winning message. */
  render() {
    let mapArr = this.state.boardCell.map((arr,index) => {
       let y = index;
      return (
        <tr key={y}>
          {arr.map((cell, i) => {
           let coord = `${y}-${i}`
            return <Cell key={coord} isLit={cell} flipCellsAroundMe={()=>this.flipCellsAround(coord)}/>;
          })}
        </tr>
      );
    });
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
    return (
      <div>
        <h1>The Lighout Game</h1>
        <h4>Toute les cases doivent êtres grisées</h4>
        <table className="Board">
          <tbody>{mapArr}</tbody>
        </table>
      </div>
    );
  }
}
export default Board;
