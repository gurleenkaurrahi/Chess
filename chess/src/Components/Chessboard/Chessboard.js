//import React from 'react';
import './Chessboard.css';
import Tile from '../Tile/Tile';

const horizontalaxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalaxis = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default function Chessboard() {
    let board = [];

    for (let j = verticalaxis.length-1; j>=0; j--) {
        for (let i = 0; i < horizontalaxis.length; i++) {
            const number = j + i + 1;
            const key = `${horizontalaxis[i]}${verticalaxis[j]}`;
            board.push(<Tile key={key} number={number} />);
        }
    }
    return <div id= 'chessboard'>{board}</div>;

}