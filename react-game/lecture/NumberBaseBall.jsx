import React,{Component} from 'react';
import Try from './Try';

function getNumbers(){ // 숫자 4개 겹치지 않고 랜덤하게 뽑는 함수

}

class NumberBaseBall extends Component{
    state={
        result:'',
        value:'',
        answer:getNumbers(),
        tries:[],
    }

    onSubmitForm=()=>{

    }

    onChangeInput=()=>{

    }

    fruits=[
        { fruit: "감" ,taste: "굿"},
        { fruit: "딸기" ,taste: "달다달아"},
        { fruit: "사과" ,taste: "맛남"},
        { fruit: "뭐 귤?" ,taste: "개꿀"},
    ];

    render() {
        return(
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
                </form>
                <div>시도 : {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v,i)=>{
                        return(
                            <Try value={v} index={i}/>
                        )
                    })}
                </ul>
            </>
        )
    }
}

export const hello='hello;'    //import { hello } 여러번 가능
export const bye='hello;'    //import { hello , bey} 변수명만 안겹치면

export default NumberBaseBall; //import NumberBaseBall; 한번만 가져올 수 있고
