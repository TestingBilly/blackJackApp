import logo from './logo.svg';
import './App.css';
import Gap from './Gap.js';
import DealersCards from './DealersCards.js';
import PlayersCards from './PlayersCards.js';
import Buttons from './Buttons.js';
import DealersHand from './DealersHand.js';
import PlayersHand from './PlayersHand.js';
import Table from './Table.js';
import Title from './Title'
function App() {

  return (

    <div className="App">

      <header className="App-header">

               <Title />
                <Table />
                <Buttons />
      </header>

    </div>
  );
}

export default App;
