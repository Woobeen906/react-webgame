import React, {useCallback, useReducer} from 'react';
import Table from "./Table";

const initialState = {
    winner: '',
    turn: 'O',
    tableData: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ],
};

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = `CHANGE_TURN`;

const reducer = (state, action) => {
    switch (action.type) {
        case SET_WINNER:
            //  state.winner = action.winner; 이렇게 하면 안됨.
            return {
                ...state,
                winner: action.winner,
            };

        case CLICK_CELL: {
            const tableData = [...state.tableData];
            tableData[action.row] = [...tableData[action.row]];
            tableData[action.row][action.cell] = state.turn;
            return {
                ...state,
                tableData,
            }
        }
        case CHANGE_TURN: {
            return {
                ...state,
                turn: state === 'O' ? 'X' : 'O',
            }
        }
    }
};

const TicTacToe = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // const [winner, setWinner] = useState();
    // const [turn, setTurn] = useState('O');
    // const [tableData, setTableData] = useState([['', '', ''], ['', '', ''], ['', '', '']]);

    const onClickTable = useCallback(() => {
        dispatch({type: SET_WINNER, winner: 'O'});
    }, []);
    console.log(state.tableData, "tictactoe")
    return (
        <>
            <Table tableData={state.tableData} dispatch={dispatch}/>
            {state.winner && <div>{state.winner}님의 승리</div>}
        </>
    );
};

export default TicTacToe;