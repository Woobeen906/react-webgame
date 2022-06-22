const React=require('react');
const { createRoot }=require('react-dom/client');

const WordRelay = require("./WordRelay");
const container=document.querySelector("#root");
const root=createRoot(container);
root.render(<WordRelay/>);

// ReactDom.render(<WordRelay/>,document.querySelector("#root"));