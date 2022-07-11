import './App.css'
import Game from './components/game/Game';
import Rando from './components/Rando/Rando';
import Button from './components/Button/Button';
import BrokenClick from './components/Brokenclick/BrokenClick';


function App() {

 return (
    <div className="App">
     <Game />
     <Rando maxNum={100} />
     <Button />
     <BrokenClick />
    </div>
  )
}

export default App