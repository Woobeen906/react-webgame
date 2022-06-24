const React = require("react");
const {useState, useRef} = require("react");

const WordRelayHook=()=>{
    const [word,setWord]=useState("글자");
    const [value,setValue]=useState('');
    const [result,setResult]=useState('');
    const inputRef=useRef();

    const onSubmit=(e)=>{
        e.preventDefault();
        if(word[word.length-1]===value[0]){
            setWord(value);
            setValue('');
            setResult("정답");
            inputRef.current.focus();
        }else{
            setValue('');
            setResult("땡");
            inputRef.current.focus();
        }
    };

    const onChangeInput=(e)=>{
        setValue(e.target.value);
    };



    return(
        <>
            <div>{word}</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} value={value} onChange={(e)=>setValue(e.currentTarget.value)}/>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    )
}

module.exports=WordRelayHook;