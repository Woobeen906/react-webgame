import React from "react";
import { createRoot } from 'react-dom/client';

import NumberBaseBall from "./NumberBaseBall";
const container=document.querySelector("#root");
const root=createRoot(container);
root.render(<NumberBaseBall/>);

// ReactDom.render(<WordRelay/>,document.querySelector("#root"));