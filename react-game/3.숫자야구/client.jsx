const React=require('react');
const { createRoot }=require('react-dom/client');

const numberBaseBall = require("./numberBaseBall");
const container=document.querySelector("#root");
const root=createRoot(container);
root.render(<numberBaseBall/>);

// ReactDom.render(<WordRelay/>,document.querySelector("#root"));