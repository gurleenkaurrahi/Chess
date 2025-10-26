import React from 'react';
import './Chessboard.css';

const horizontalaxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalaxis = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Chessboard() {
    let board = [];

    for (let i = 0; i < horizontalaxis.length; i++) {
        for (let j = 0; j < verticalaxis.length; j++) {
            board.push(<span>horizontal {horizontalaxis[i]}</span>)
        }
    return <div id= 'chessboard'>

    </div>
        
}
}