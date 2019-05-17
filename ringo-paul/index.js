class App extends React.Component {
    render(){
        return (
            <div>
                <Hello 
                to="Ringo" 
                from="Paul"
                bangs={4}
                img="https://images.unsplash.com/photo-1557562440-b67d58679232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));