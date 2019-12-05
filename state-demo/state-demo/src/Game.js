import React, {Component} from 'react';

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        }
    }

    render(){
        return(
            <div>
                <h1>The Player 1 is {this.props.player} and her score is {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;