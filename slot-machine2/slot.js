class Slot extends React.Component {
    render(){
        function getFruits() {
            const fruits = ["🍇", "🍊", "🍒" ];
            return fruits[Math.floor(Math.random() * fruits.length)];
        }

        let fruits1 = getFruits();
        let fruits2 = getFruits();
        let fruits3 = getFruits();
        let msg;
        const colors = {fontSize: "30px", backgroundColor: "white"}

        if(fruits1 === fruits2 && fruits2 === fruits3){
            msg = "You win!";
            
        } else {
            msg = "You lose!"
        }
 
        return(
            <div className="slot">
                <span>{fruits1}</span><span>{fruits2}</span><span>{fruits3}</span>
                <p style={colors}>{msg}</p>
            </div>
        )
    }
}