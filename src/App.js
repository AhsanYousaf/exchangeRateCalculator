import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            rates: [],
            isLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    rates: json,
                    isLoaded: true
                });
            })
    }
    render() {
        const { isLoaded, rates } = this.state;
        if (!isLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                rates.map((rate) => (
                <h1>{rate.name}</h1>
                ))
            }

        </div>
    );
}
}
   
export default App;