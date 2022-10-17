import React, {memo, Component} from 'react';


const Try = memo(({tryInfo}) => {
    return (
        <li>
            <b>{tryInfo.try}</b><br/>
            <b>{tryInfo.result}</b>
        </li>
    )
});

Try.displayName='aa';

export default Try;
