import React, {Component} from 'react';

class Try extends Component {

    render() {
        const {tryInfo} = this.props;
        return (
            <li>
                <b>{tryInfo.try}</b><br/>
                <b>{tryInfo.result}</b>
            </li>
        )
    }
}

export default Try;