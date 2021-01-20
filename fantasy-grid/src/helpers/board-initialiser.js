import Druid from '../pieces/druid.js';
import Paladin from '../pieces/paladin.js';


export default function initialiseChessBoard(){
    const squares = Array(64).fill(null);
    for(let i = 8; i < 16; i++){
    //  squares[i] = new Druid(2);
    //  squares[i+40] = new Druid(1);
    }
 
    squares[0] = new Paladin(2);
    squares[7] = new Paladin(2);

    squares[56] = new Paladin(1);
    squares[63] = new Paladin(1);

    squares[1] = new Druid(2);
    squares[6] = new Druid(2);
    squares[57] = new Druid(1);
    squares[62] = new Druid(1);
  
  /*
   
    squares[2] = new Bishop(2);
    squares[5] = new Bishop(2);
    squares[58] = new Bishop(1);
    squares[61] = new Bishop(1);
  
    squares[3] = new Queen(2);
    squares[4] = new King(2);
  
    squares[59] = new Queen(1);
    squares[60] = new King(1);
  */
    return squares;
  }