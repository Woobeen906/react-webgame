const React=require('react');
const {useState,useRef}=React;

const GuGuDan=()=>{
    const [first,setFrist]=useState(Math.ceil(Math.random()*9));
    const [second,setSecond]=useState(Math.ceil(Math.random()*9));
    const [value,setValue]=useState("");
    const [result,setResult]=useState("");
    const inputRef=useRef(null);


    const onChangeInput=(e)=>{
        setValue(e.target.value);
    };

    const onSubmitForm=(e)=>{
        e.preventDefault();
        if(parseInt(value)===first*second){
            setResult(`${value} 정답`);
            setFrist(Math.ceil(Math.random()*9));
            setSecond(Math.ceil(Math.random()*9));
            setValue("");
            inputRef.current.focus();
        }else{
            setResult(`땡`);
            setValue("");

            inputRef.current.focus();
        }
    }

    return (
        <>
            <div>{first} * {second} = ?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} type="number" onChange={onChangeInput} value={value}/>
                <button>입력!</button>
            </form>
            <div id="result">{result}</div>
        </>
    )
}


module.exports=GuGuDan;