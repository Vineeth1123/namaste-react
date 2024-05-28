// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello World from React"
//     );
//     console.log(heading);//object

//nested div structure
const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"This is an h1 Tag"),React.createElement("h2",{},"This is an h2 Tag")]),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"This is an h1 Tag"),React.createElement("h2",{},"This is an h2 Tag")])
    ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);//convert object into h1 ag and put it on DOM