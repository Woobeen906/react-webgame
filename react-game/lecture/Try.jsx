import React , {Component} from 'react';

class Try extends Component{

    render(){
        return(
            <li>
                <b>{this.props.tryInfo.try}</b><br/>
                <b>{this.props.tryInfo.result}</b>
            </li>
        )
    }
}

export default Try;