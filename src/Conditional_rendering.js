import React from 'react'
import ReactDom from 'react-dom'

function UserGreeting(props){
	return <h1> Welcome back! </h1>
}

function GuestGreeting(props){
	return <h1> Please sign up.</h1>
}


function Greating(props){
	const isLoggedIn = props.isLoggedIn;
	if(isLoggedIn){
		return <UserGreeting/>;
	}
	return <GuestGreeting/>;
}


function LoginButton(props){
	return (
		<button onClick = {props.onClick}>
			Login
		</button>
		);
}

function LogoutButton(props) {
	return(
		<button onClick = {props.onClick}>
			Logout
		</button>
		);
}


class LoginControl extends React.Component{
	constructor(props){
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {isLoggedIn:false};

	}

	handleLoginClick(){
		this.setState({isLoggedIn:true});
	}

	handleLogoutClick(){
		this.setState({isLoggedIn: false})
	}

	render(){
		const isLoggedIn = this.state.isLoggedIn;
		const button = isLoggedIn ? (
			<LogoutButton onClick = {this.handleLogoutClick} />
			):(
			<LoginButton onClick = {this.handleLoginClick} />
			)

		return(
			<div>
				<Greating isLoggedIn = {isLoggedIn}/>
				{button}
			</div>
			)
	}
}




ReactDom.render(
	<LoginControl/>,
	document.getElementById("root")
	)
