import React, {Component} from 'react';
import Game from './Game';
import Rando from './Rando';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Game player="Mimi" session={2}/>
        <Rando maxNum={7}/>
      </div>
    )
  }
}

export default App;
