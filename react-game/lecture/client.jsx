import React from "react";
import {createRoot} from 'react-dom/client';

import NumberBaseBall from "./NumberBaseBall/NumberBaseBallHook";
import ResponseCheck from "./ResponseCheck/ResponseCheckHook";
import RSP from './RSP/RSPHook';
// import Lotto from "./Lotto";
import LottoHook from "./Lotto/LottoHook";
import TicTacToe from "./TicTacToe/TicTacToe";
import MineSerach from "./MineSerach/MineSerach";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MineSerach/>);

// ReactDom.render(<WordRelay/>,document.querySelector("#root"));