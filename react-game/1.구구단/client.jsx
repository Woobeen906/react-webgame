const React=require('react');
const { createRoot }=require('react-dom/client');

const GuGuDan = require("./GuGuDan");
const container=document.querySelector("#root");
const root=createRoot(container);
root.render(<GuGuDan/>);

// ReactDom.render(<WordRelay/>,document.querySelector("#root"));