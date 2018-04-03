import React from 'react'
import ReactDom from 'react-dom'
import { SketchPicker } from 'react-color';


class Component extends React.Component {

  render() {
    return <SketchPicker />;
  }
}


function Splitpane(props) {
	return(
		<div className = "splitpane">
			<div className = 'splitpane-left'>
				{props.left};
			</div>
			<div className = 'splitpane-right'>
				{props.right};
			</div>
		</div>
		);
}

function App(props) {
	return(
		<Splitpane left={<Contact/>} right = {<Chat/>} />
		);
}

/*ReactDom.render(
	<App />,
	document.getElementById('root')
	)
*/


//specializaiton

function FancyBorder(props) {
	return(
		// have problem with color, does not work
		<div className = {'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
		);
}

function Dialog(props) {
	return(
		// color does not work......
		<FancyBorder color: 'blue'>
			<h1 className = 'Dialog-title'>
				{props.title}
			</h1>
			<p className = 'Dialog-message'>
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
		);
}

function WelComeDialog() {
	return(
		<Dialog titile = 'Welcome'
				message = 'Thank you for visiting our spacecraft!' />
		);
}

class SignUpDialog extends React.Component{
	constructor(props){
		super(props);
		this.state = {login: ''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleChange(e){
		this.setState({
			login:e.target.value
		});
	}

	handleSignUp(e){
		alert(`Welcome aboard, ${this.state.login}`);
	}

	render(){
		return(
			<Dialog titile = 'Mars Exploration Program' message = 'How should we refer to you?'>
				<input value = {this.state.login} onChange = {this.handleChange} />
				<button onClick = {this.handleSignUp}>
					Sign Me Up!
				</button>
			</Dialog>
			);
	}
}



ReactDom.render(
	<SignUpDialog />,
	document.getElementById('root')
	)