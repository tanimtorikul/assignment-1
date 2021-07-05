import React, { Component} from 'react';

class MyComponent extends Component {
    render(props){
        return(
        <div>
            <h1>My name is: {this.props.name}</h1>
            <h1>My age is: {this.props.age}</h1>
            <h1>I'm a {this.props.profession}</h1>
           <button>Click</button>
        </div>)
    }
}

export default MyComponent;