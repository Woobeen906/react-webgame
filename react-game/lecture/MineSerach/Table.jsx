import React, {useContext} from 'react';
import Tr from "./Tr";
import {TableContext} from "./MineSerach";

const Table = () => {
    const {tableData} = useContext(TableContext);
    console.log(tableData.length, "t")
    return (
        <table>
            <tbody>
            {Array(tableData.length).fill().map((tr, i) =>
                <Tr rowIndex={i}/>
            )}
            </tbody>
        </table>
    );
};

export default Table;