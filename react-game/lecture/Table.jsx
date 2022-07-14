import React from 'react';
import Tr from "./Tr";

const Table = ({tableData, dispatch}) => {
    console.log(tableData.length, "table", tableData)
    return (
        <table>
            {Array(tableData.length).fill().map((tr, i) => <Tr rowIndex={i} rowData={tableData[i]}
                                                               dispatch={dispatch}/>)}
        </table>

    );
};

export default Table;