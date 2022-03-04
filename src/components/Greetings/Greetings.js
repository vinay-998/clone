import { React,Component } from 'react';

class Greetings extends Component {
    constructor(){
        super();
        this.state ={ name:'vinay'};
    }
    render() {
        return(
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>

            <button onClick={()=>{
                this.setState({name:'vivekananda'})
            }}>Click Here</button>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                <p>{this.state.name}</p>
                
            </div>
        )
    }
}
export default Greetings;