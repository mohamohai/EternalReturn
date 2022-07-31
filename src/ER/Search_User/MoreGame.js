import React, {Component} from 'react';

class MoreGame extends Component{

    constructor(props) {
        super(props);
        this.state = {
            UserOne:"abc"





        }
    }
    
        render(){

    return (
        <div>{this.state.UserOne}
        원투</div>
    );
}
}

export default MoreGame;