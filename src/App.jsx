import './App.css'
import Game from './components/game/Game';
import Rando from './components/Rando/Rando';


function App() {

 return (
    <div className="App">
     <Game />
     <Rando maxNum={100} />
    </div>
  )
}

export default App