import React from "react";
class UserClass extends React.Component{
    constructor(props)
    {
        super(props);
        //state variable 
        this.state ={
            count:0,
            count2:1
        }
        console.log('child constrcutor');
    }
    componentDidMount(){
        console.log('child component did mount');
    }
    render(){
        console.log('child render');
        const {name, location, contact,avatar_url}  = this.props;
        const {count, count2} = this.state;
        return(
            <div className="user-card">
                <h1>Class based Component</h1>
                <p>Count :<span>{count}</span></p>
                <button className="btnCount" onClick={
                    ()=>{
                        this.setState({
                            count:count + 1
                        });
                    }
                }>Count Update</button>
                {/* <p>Count 2 :<span>{count2}</span></p> */}
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact:{contact}</h4>
                <img src={avatar_url} />
            </div>
        )
    }
}
export default UserClass;