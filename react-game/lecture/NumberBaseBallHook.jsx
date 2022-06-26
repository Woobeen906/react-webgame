import React, {Component, useState} from 'react';
import Try from './Try';

function getNumbers(x) { // 숫자 4개 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    candidate.map((v, i) => {
        if (array.length < 4) array.push(candidate.splice(Math.floor(Math.random() * (9 - i), 1), 1)[0]);
    })
    return array;
}

const NumberBaseBallHook = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers); //lazy init
    const [tries, setTries] = useState([]);


    const onSubmitForm = (e) => {
        e.preventDefault();
        if (value === answer.join('')) {
            setResult("홈런!");
            setTries((prevState) => {
                return ([...prevState, {try: value, result: "홈런"}])
            });

            alert("정답");
            setResult("");
            setValue('');
            setAnswer(getNumbers());
            setTries([]);

        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')}입니다!`);
                alert(`10번 넘게 틀려서 실패! 답은 ${answer.join('')}입니다! 새로운 게임을 합시다`);
                setResult("");
                setValue('');
                setAnswer(getNumbers());
                setTries([]);
            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setValue('');
                setTries((prevState) => {
                    return([...prevState, {try: value, result: `${strike} 스트라이크 , ${ball} 볼`}])
                });
            }
        }
    }

    const onChangeInput = (e) => {
        setValue(e.currentTarget.value);
    }

    return (
        <>
            <h1>{answer}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput}/>
            </form>
            <div>시도 : {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try key={v.try + v.result} tryInfo={v}/>
                    )
                })}
            </ul>
        </>
    )
}

export const hello = 'hello;'    //import { hello } 여러번 가능
export const bye = 'hello;'    //import { hello , bey} 변수명만 안겹치면

export default NumberBaseBallHook; //import NumberBaseBallHook; 한번만 가져올 수 있고
