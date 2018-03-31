import React from "react"
import ReactDom from "react-dom"


function Message(props){

	if(props.value){
		return	<h1>This is a message</h1>
	}
	return <h1>This is second message</h1>
}


class Butt extends React.Component{
	constructor(props){
		super(props);
		this.state ={value:true}
	}

	handleClick = () => {
		this.setState({
			value:!this.state.value
		});
	}

	render(){
		return(
			<div>
				<button onClick={this.handleClick}> Change message </button>
				<Message value={this.state.value}/>
			</div>
			)
	}

}

ReactDom.render(
	<Butt/>,
	document.getElementById("root")
	)
