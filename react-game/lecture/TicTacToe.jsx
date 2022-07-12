import React, {useCallback, useReducer, useState} from 'react';
import Table from "./Table";

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [['', '', ''], ['', '', ''], ['', '', '']],
};

const reducer = (state, action) => {
    switch (action.type){
        case 'SET_WINNER':
            //  state.winner = action.winner; 이렇게 하면 안됨.
            return{
                ...state,
                winner:action.winner,
            }
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [winner, setWinner] = useState();
    // const [turn, setTurn] = useState('O');
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    const onClickTable = useCallback(() => {
        dispatch({type: 'SET_WINNER', winner: 'O'});
    }, []);

    return (
        <>
            <Table onClick={onClickTable}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
};

export default TicTacToe;