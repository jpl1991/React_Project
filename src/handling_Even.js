import React from 'react'

import ReactDom from 'react-dom'


class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn:true};

		//this binding is neccessary to make "this" work in the call back
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		this.setState(prevState=>({
			isToggleOn: !prevState.isToggleOn

		}));
	}


	render(){
		return (<button onClick = {this.handleClick}>
		 		{this.state.isToggleOn ? 'ON': 'OFF'}

		 	 </button>);
	}

}

ReactDom.render(
	<Toggle/>,
	document.getElementById("root")

	)


