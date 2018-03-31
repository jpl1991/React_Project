import React from 'react'
import ReactDom from 'react-dom'

class Inc extends React.Component{
	constructor(props){
		super(props);
		this.state = {counter:0}
	}

	increment(e){
		this.setSet({
			counter: this.state.counter + 1
		});
	}

	render(){
		return <a href ='http://google.ca' onClick = {()=>this.increment}>Value is {this.state.counter} </a>
	}
}

ReactDom.render(
	<Inc/>,
	document.getElementById("root")
	)

