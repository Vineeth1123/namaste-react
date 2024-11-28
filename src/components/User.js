import { useState } from "react";

const User = ({name}) =>{
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Funcion based Component</h1>
            <p>Count:<span>{count}</span></p>
            <p>Count2:<span>{count2}</span></p>
            <h2>Name: {"Vineetha"}</h2>
            <h3>Location: {"Maradu"}</h3>
            <h4>Contact:{"vineetha@alignminds.com"}</h4>
        </div>
    )
}

export default User;