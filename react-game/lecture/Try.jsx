import React, {Component} from 'react';


const Try=({tryInfo})=>{
    return(
        <li>
            <b>{tryInfo.try}</b><br/>
            <b>{tryInfo.result}</b>
        </li>
    )
}

// class Try extends Component {
//
//     render() {
//         const {tryInfo} = this.props;
//         return (
//             <li>
//                 <b>{tryInfo.try}</b><br/>
//                 <b>{tryInfo.result}</b>
//             </li>
//         )
//     }
// }

export default Try;