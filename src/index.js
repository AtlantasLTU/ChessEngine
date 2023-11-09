//Tailwind build process npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

let isGameOngoing = true;
let loadingIsDone = false;

function darkSquare(Square){
    let darkSquare = `<div id="${Square}" class="bg-black w-[100px] h-[100px] flex"></div>`;
    return darkSquare;
}

function lightSquare(Square){
    let lightSquare = `<div id="${Square}" class="bg-lime-200 w-[100px] h-[100px] flex"></div>`;
    return lightSquare;
}

function drawChessBoard(){
    let Square = 0;
    const chessBoard = document.getElementById("chessBoard");
    //let darkSquare = `<div id="${Square}" class="bg-black w-[100px] h-[100px] flex"></div>`;
    //let lightSquare = `<div id="${Square}" class="bg-lime-200 w-[100px] h-[100px] flex"></div>`;
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(i%2==0){
                if(j%2==0){
                    chessBoard.innerHTML += lightSquare(Square);
                    Square++;
                } else if(j%2!=0){
                    chessBoard.innerHTML += darkSquare(Square);
                    Square++;
                }
            } else if(i%2!=0){
                if(j%2==0){
                    chessBoard.innerHTML += darkSquare(Square);
                    Square++;
                } else if(j%2!=0){
                    chessBoard.innerHTML += lightSquare(Square);
                    Square++;
                }
            }
        }
    }
    loadingIsDone = true;
    document.addEventListener("DOMContentLoaded", renderBoard());
}

class Piece{
    static None = 0; // 0
    static King = 1; // 1
    static Pawn = 10; // 2
    static Knight = 11; // 3
    static Bishop = 100; // 4
    static Rook = 101; // 5
    static Queen = 110; // 6

    static White = 1000; // 8
    static Black = 10000; // 16
}

class Board{
    static #Square = new Array(64);

    static get Square(){
        return this.#Square;
    }
}

Board.Square[0] = Piece.White + Piece.Bishop;
Board.Square[63] = Piece.Black + Piece.Queen;
Board.Square[7] = Piece.Black + Piece.Knight;

function renderBoard(){
    let i=0;
    while(isGameOngoing==true && loadingIsDone == true){
        document.getElementById(i).innerHTML += `${Board.Square[i]}`;
        i++;
    }
}
