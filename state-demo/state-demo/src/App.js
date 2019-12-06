import React, {Component} from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Game player="Mimi" session={2}/>
        <Rando maxNum={7}/>
        <Button />
        <BrokenClick />
      </div>
    )
  }
}

export default App;
