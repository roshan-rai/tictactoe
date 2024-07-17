import {useState, useEffect} from "react"
import Cell from "./components/Cell"
const App = ()=> {
  const[cells, setCells]=useState(["","","","","","","","",""])
  const[go,setGo]=useState("circle");//circle to go first setting
  const[winningMessage, setWinningMessage]=useState(null)
  const message="it is now"+go+"'s go."

  const checkScore=() =>{
    const winningCombos=[
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    winningCombos.forEach(array=>{
      let circleWins = array.every(cell=>cells[cell]==="circle")
      if(circleWins){
        setWinningMessage("cirlce wins")
        return
      }
    })
  

  winningCombos.forEach(array=>{
    let crossWins = array.every(cell=>cells[cell]==="cross")
    if(crossWins){
      setWinningMessage("cross wins")
      return
    }
  })
}

useEffect(() =>{
  checkScore()
},[cells]

)

  return (
    <div className="app">
    <div className="gameboard">
        {cells.map((cell, index) => //each cells needs an index
          <Cell 
          key={index}//key
          id={index}// this means pass the id in the cell.js also id; idk why ? but after adding the id now the values are 0,1,2,3,4,5 for ids
          cell ={cell}//cell
          go={go}
          setGo={setGo}
          cells={cells}
          setCells={setCells}

        />
        )}
    </div>
    <p>{winningMessage || message}</p>
    </div>
  )
}

export default App;
