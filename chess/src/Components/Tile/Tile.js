import './Tile.css';
import bishopImg from '../../Assets/Images/Chess_pdt60.png';

// If this is JavaScript file, remove the TypeScript interface:
export default function Tile({ number, piece }) {
  if (number % 2 === 0) {
    return <div className='tile black-tile'><img src="./assets/images/Chess_pdt60.png" alt="bishop" className="piece" /></div>;
} else {
    return <div className="tile white-tile"></div>;
}
}