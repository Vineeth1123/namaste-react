import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = ()=>{
//     return (
//         <div>
//             <h1>About us Page</h1>
//             <User name={"Vineetha"} />
//             <UserClass  name={"Vineetha"} location={"Maradu"} contact={"vineetha@alignminds.com"}/>
//         </div>
//     );
// }
class About extends Component
{
    constructor(props){
        super(props);
        console.log('parent constructor');
        this.state ={
            userInfo:{
                name:'Vineetha,',
                location:'Maradu'
            }
        }
    }
    async componentDidMount(){
        console.log("Parent Component did mount");
        const data = await fetch("https://api.github.com/users/Vineeth1123");
        const json = await data.json();
        console.log(json);
        console.log('parent component did mount');
        this.setState({
            userInfo : json
        })
    }

    componentWillUnmount(){
        console.log("Component will umount");
    }
    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        console.log('parent render');
        return (
            <div>
                <h1>About us Page</h1>
                <User name={name} />
                <UserClass  name={name} location={location} contact={"vineetha@alignminds.com"} avatar_url={avatar_url}/>
            </div>
        );
    }
}

export default About;