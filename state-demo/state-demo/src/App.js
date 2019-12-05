import React, {Component} from 'react';
import Game from './Game';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Game player="Mimi" session={2}/>
      </div>
    )
  }
}

export default App;
