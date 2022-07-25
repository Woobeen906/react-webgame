import React, {Component} from 'react';
import Try from '../Try';

function getNumbers(x) { // 숫자 4개 겹치지 않고 랜덤하게 뽑는 함수
    const candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];
    candidate.map((v, i) => {
        if (array.length < 4) array.push(candidate.splice(Math.floor(Math.random() * (9 - i), 1), 1)[0]);
    })
    return array;
}

class NumberBaseBall extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    }

    onSubmitForm = (e) => {
        const {answer, value, tries} = this.state;
        e.preventDefault();
        if (value === answer.join('')) {
            this.setState((prevState) => {
                return ({
                    result: "홈런!",
                    tries: [...prevState.tries, {try: value, result: "홈런!"}]
                })
            });
            this.setState({
                value: '',
                answer: getNumbers(),
                tires: [],
            });
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}입니다!`
                })
                alert("새로운 게임을 합시다");
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tires: [],
                });
            } else {
                for (let i = 0; i < 4; i++) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState((prevState) => {
                    return ({
                        value: '',
                        tries: [...prevState.tries, {try: value, result: `${strike} 스트라이크 , ${ball} 볼`}]
                    })
                })
            }
        }
    }

    onChangeInput = (e) => {
        this.setState({
            value: e.currentTarget.value,
        })
    }

    render() {
        const {value, tries, answer} = this.state;
        return (
            <>
                <h1>{answer}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={value} onChange={this.onChangeInput}/>
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
}

export const hello = 'hello;'    //import { hello } 여러번 가능
export const bye = 'hello;'    //import { hello , bey} 변수명만 안겹치면

export default NumberBaseBall; //import NumberBaseBall; 한번만 가져올 수 있고
