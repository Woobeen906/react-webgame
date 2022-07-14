import React, {useCallback} from 'react';
import {CLICK_CELL, CHANGE_TURN} from "./TicTacToe";

const Td = ({rowIndex, cellIndex, dispatch, cellData}) => {
    const onClickTd = useCallback(() => {
        dispatch({typs: CLICK_CELL, row: rowIndex, cell: cellIndex});
        dispatch({typs: CHANGE_TURN});
    }, [])

    return (
        <td onClick={onClickTd}>
            {cellData}
        </td>
    );
};

export default Td;