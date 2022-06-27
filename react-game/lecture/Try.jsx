import React, {memo} from 'react';


const Try = memo(({tryInfo}) => {
    return (
        <li>
            <b>{tryInfo.try}</b><br/>
            <b>{tryInfo.result}</b>
        </li>
    )
});

Try.displayName='aa';

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