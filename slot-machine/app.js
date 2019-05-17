class SlotMachine extends React.Component {
    render(){
        return(
            <div>
                <h1>Slot Machines!</h1>
                <Slot/>
                <Slot/>
                <Slot/>
            </div>
        )
    }
}

ReactDOM.render(<SlotMachine/>, document.getElementById("root"));