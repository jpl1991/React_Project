import React from 'react'
import ReactDom from 'react-dom'

/*

class Clock extends React.Component{
	constructor(props){

		super(props);

		this.state ={
			date: new Date()
		}
	}

	componentDidMount(){
		this.timer=setInterval(()=>this.start(),1000);

	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	start(){
		this.setState({date: new Date()});
	}

	render(){
		return <h1> Time is :{this.state.date.toLocaleTimeString()}</h1>
	}
}



	ReactDom.render(
		<Clock/>,
		document.getElementById("root")
	);
*/
/*
class Inc extends React.Component{
	constructor(props){
		super(props);
		this.state = {counter:0}
	}

	increment(e){
		e.preventDefault();
		this.setState({
			counter: this.state.counter + 1
		});
	}
	render(){
		return <button onClick = {(e)=>this.increment(e)}>Value is {this.state.counter}</button>
	}
}

ReactDom.render(
	<Inc/>,
	document.getElementById("root")
	)
*/

/*function Message(props){

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
	)*/

class Toggle extends React.Component{
	constructor(props){
		super(props);
		this.state = {isToggleOn:true};

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




