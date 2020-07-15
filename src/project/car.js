import React, { Component } from 'react';

// class Car extends Component {
//     render() {  
//         return <h2>I am {this.props.brand}!</h2>;
//     }
// }
// class Garage extends Component {
//     render() {  
//         return (  
//             <div>
//                 <h1>who lives in my garage?</h1> 
//                 <Car brand='Ford'/>
//             </div>
//         );
//     }
// }
// export default Garage;
class Car extends Component{
    constructor(props) {
        super(props)
        this.state = {
            brand: 'Ford',
            color: 'white',
            model: 'Mustang',
            year: 1965
        }
    }
    shouldComponentUpdate() {
        return true;
    }
    changeColor = () => {
        this.setState({color: 'blue'})
    }
    render() {
        return (
            <div>
                <h1>{this.state.brand}</h1>
                <p>
                    My color is {this.state.color} {this.state.model} from {this.state.year}
                </p>
                <button type = 'button' onClick = {this.changeColor}>
                    Change Color
                </button>
            </div>
        )
    }
}
export default Car;