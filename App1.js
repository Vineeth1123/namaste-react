// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React"
//     );
//     console.log(heading);//object

//nested div structure

import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement(
//         "div",
//         {id:"child1"},
//         [React.createElement("h1",{},"This is Namsthe React"),React.createElement("h2",{},"This is an h2 Tag")]),
//     React.createElement(
//         "div",
//         {id:"child2"},
//         [React.createElement("h1",{},"This is an h1 Tag"),React.createElement("h2",{},"This is an h2 Tag")])
//     ]
// )
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);//convert object into h1 ag and put it on DOM


/*core react,this is not developer friendly.................React element*/
const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Namaste React"
    );
const root =  ReactDOM.createRoot(document.getElementById("root"));

//JSX -- HTML like or XML like syntax
/* -- Single line ---*/
const jsxHeading = <h1 className="head">Namaste React</h1>;

/*-- Multiline jsx --*/
const jsMultiHeading = (
    <h2 className="subhead">Multiline example</h2>
);

root.render(jsxHeading);
root.render(jsMultiHeading);



//React Functional Component

const elem = <span>React element</span>;

const Title =(
    <div id="container">
        {elem}
    <h1>Namste React using jsx</h1>
    </div>
);
/* Syntax 1 -- strict to this syntax */
const HeadingComponent = () =>{
    return <h1>Namste React Functional</h1>
};

/* Syntax  2 */

//component composition -- component putting in one another
const HeadingComponent2 = () => (
    <div id="component">
        {200+300}
        {Title}
        <h1>Namste React Functional</h1>
    </div>
);
root.render(<HeadingComponent2/>);
