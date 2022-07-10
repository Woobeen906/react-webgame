import React, {useEffect, useMemo, useRef, useState} from 'react';
import Ball from "./Ball";

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];

    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];

}

const LottoHook = () => {
    // const lottoNumbers=useMemo(()=>getWinNumbers(),[]); initLazy 대신 사용가능
    // 두번째 인자가 바뀌지 않으면 첫번째 인자는 다시 실행되지 않음
    const [winNumbers, setWinNumbers] = useState(getWinNumbers);//initLazy
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState();
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(()=>{
        // ajax
    },[]);

    const mounted=useRef(false);
    useEffect(()=>{
        if(!mounted.current){
            mounted.current=true;
        }
        // ajax
    },[redo]); // componentDidUpdate만 동작하고, componentDidMount는 동작안하고 싶을때

    const runTimeouts = () => {
        for (let i = 0; i < winNumbers.length - 1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]])
            }, (i + 1) * 1000)
        }

        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6]);
            setRedo(true);
        }, 7000)
    }
    // useEffect(() => {
    //     runTimeouts();
    // }, [])
    //  빈 배열이면 componentDidMount와 동일
    // 배열에 요소가 있으면 componentDidMount , componentDidUpdate 둘 다 수행

    useEffect(() => {
        if (!redo) {
            runTimeouts();
        }
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            })
        }
    }, [redo])

    const onClickRedo = () => {
        setWinBalls(getWinNumbers);
        setWinBalls([]);
        setBonus(null);
        setRedo(false);

        timeouts.current = [];
    }


    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v}/>)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus}/>}
            {redo && <button onClick={onClickRedo}>한 번 더!
            </button>}

        </>
    );
};

export default LottoHook;