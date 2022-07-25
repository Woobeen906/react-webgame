import React, {useCallback} from 'react';
import {CLICK_CELL, CHANGE_TURN} from "./TicTacToe";

const Td = ({rowIndex, cellIndex, dispatch, cellData}) => {
    const onClickTd = useCallback(() => {
        if(cellData){   // 클릭된 cell 확인
            return;
        }
        dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex});
    }, [cellData])

    return (
        <td onClick={onClickTd}>
            {cellData}
        </td>
    );
};

export default Td;