class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    const arr = [];
    let heightCounter = 0;

    while(heightCounter <= this.height){
      arr.push([]);  
      heightCounter++;
    }

    arr.forEach((item)=> {
      while(item.length <= this.width){
        item.push(0);
      }
    });
        return arr;


    // TODO: Create and return an 2D Array 
    // with `this.heigh` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
  }


  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, column) {
    // TODO: Return the count of living neighbors.
    let counter = 0;

    for(let i=0;i<this.board.length;i++){
      for(let j=0;j<this.board[i].length;j++){

      

        if(i===row && j===column){
            if(i+1>=0 && j+1>=0 && this.board[i+1][j+1]===1){
              counter++;
            }
            if(i+1>=0 && j>=0 && this.board[i+1][j]===1){
              counter++;
            }
            if(i+1>=0 && j-1>=0 && this.board[i+1][j-1]===1){
              counter++;
            }
            if(i>=0 && j+1>=0 && this.board[i][j+1]===1){
              counter++;
            }
            if(i>=0 && j-1>=0 && this.board[i][j-1]===1){
              counter++;
            }
            if(i-1>=0 && j>=0 && this.board[i-1][j]){
              counter++;
            }
            if(i-1>=0 && j+1>=0 && this.board[i-1][j+1]===1){
              counter++;   
            }
            if(i-1>=0 && j-1>=0 && this.board[i-1][j-1]===1){
              counter++;
            }
          }
       }
     }

    return counter;
  }
    


  


  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick() {
    const newBoard = this.makeBoard();
    console.log('old board', this.board);
    for(let i=0;i<this.board.length;i++){
      for(let j=0;j<this.board[i].length;j++){
        
        if (this.board[i][j]===1 && this.livingNeighbors(i,j)<2){
          return newBoard[i][j]=0;
        }

        if (this.board[i][j]===1 && this.livingNeighbors(i,j)>3){
          return newBoard[i][j]=0;
        }

        if (this.board[i][j]===0 && this.livingNeighbors(i,j)===3){
          return newBoard[i][j]=1;
        }


      }
    }

    

    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }


  getCell(row,column){
    for(let i=0;i<this.board.length;i++){
      if(i===row){
        for(let j=0;j<this.board[i].length;j++){
          if(j===column){
            return this.board[i][j];
          }
        }
      }
    }
  }



  setCell(val,row,column){
    for(let i=0;i<this.board.length;i++){
      if(i===row){
        for(let j=0;j<this.board[i].length;j++){
          if(j===column){
            this.board[i][j]=val;
            return this.board;
          }
        }
      }
    }
  }


  toggleCell(row,column){
      for(let i=0;i<this.board.length;i++){
        
        if(i===row){
          for(let j=0;j<this.board[i].length;j++){
            if(j===column){
              if(this.board[i][j]===0){
                this.setCell(this.board[i][j]+=1,row,column);
                return this.board;
              }else{
                return this.board;
              }
            }
          }
        }
      }
    }


}

const test = new GameOfLife(5,5);
//console.log("test.board",test.board);
//console.log(test.getCell(4,4));
console.log(test.setCell(1,4,2));
console.log(test.setCell(1,1,3));
console.log(test.setCell(1,2,2));
console.log(test.setCell(1,2,3));
console.log(test.setCell(1,1,0));
console.log(test.setCell(1,0,1));
//console.log("set 0 to 1", test.toggleCell(4,4));
console.log(test.livingNeighbors(2,0));
console.log(test.tick())