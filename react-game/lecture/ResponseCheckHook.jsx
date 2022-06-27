import React, {useRef, useState} from "react";


const ResponseCheck = () => {
    const [state, setState] = useState('waiting');
    const [message, setMessage] = useState('클릭해서 시작하세요');
    const [result, setResult] = useState([]);
    const timeout = useRef(null);
    const startTime = useRef(null);
    const endTime = useRef(null);


    const onClickScreen = (e) => {

        if (state === 'waiting') {
            setState('ready');
            setMessage('초록색이 되면 클릭하세요.');

            timeout.current = setTimeout(() => {
                setState('now');
                setMessage('지금 클릭!!!');
                startTime.current = new Date();
            }, Math.floor(Math.random() * 2000) + 1000)// 1~3초 랜덤

        } else if (state === 'ready') { // 성급하게 클릭
            clearTimeout(timeout);
            setState('waiting');
            setMessage('너무 빨라요! 초록색이 되면 클릭해주세요');
        } else if (state === 'now') { // 반응속도 체크
            endTime.current = new Date();
            setState('waiting');
            setMessage('클릭해서 시작하세요!');
            setResult((prevState) => {
                return ([...prevState, endTime.current - startTime.current])
            })
        }
    }

    const onReset = () => {
        setResult([])
    }

    const renderAverage = () => {
        return result.length !== 0 &&
            <>
                <div>평균 시간 :{(result.reduce((a, c) => a + c) / result.length).toFixed(5)}ms</div>
                <button onClick={onReset}>리셋</button>
            </>
    }

    return (
        <>
            <div
                id="screen"
                className={state}
                onClick={onClickScreen}
            >
                {message}
            </div>
            {renderAverage()}
        </>
    );

}

export default ResponseCheck;