import React from "react";

class UserClass extends React.Component{
  constructor(props){
    super(props);

    this.state={
        userInfo:{
            name:"Nayab",
            Location:"default",
            avatar_url:"default",
        },
    }
    
}  

async componentDidMount(){
    const data=await fetch(" https://api.github.com/users/nayab07")
    const json=await data.json();
    console.log(json)
    this.setState({
        userInfo:json,
    })
}
render(){
    const{name,location,avatar_url}=this.state.userInfo
    return(
        <div>
        <img src={avatar_url}/>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
        </div>
    )
}

}

export default UserClass;