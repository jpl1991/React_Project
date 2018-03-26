import React from 'react'
import ReactDom from 'react-dom'

let name = 'Peilin Jiang'

/*unction Clock(props){
	return(
		<div>
			<h1> Hello {name}</h1>
			<h2> It is {props.date.toLocaleTimeString()}</h2>
		</div>

		)
}

function tick(){
	ReactDom.render(
		<Clock date = {new Date()}/>,
		document.getElementById("root")
		);
}

setInterval(tick,1000);


*/

//converting function to class
/*
class Clock extends React.Component{
	render(){
		return(
			<div>
				<h1> Hello {name}</h1>
				<h2> It is {this.props.date.toLocaleTimeString()}</h2>
			</div>

			);
		}
}
function tick(){
	ReactDom.render(
		<Clock date = {new Date()}/>,
		document.getElementById("root")
		);
}

setInterval(tick,1000);*/

//adding local state to a class

class Clock extends React.Component{
	constructor(propos){
		super(props);
		this.state= {date: new Date};
	}

	componentDidMount(){
		this.timer = setInterval(
			()=>this.tick(),1000
			);
	}

	componentUnMount(){
		clearInterval( this.timer);

	}

	tick(){
		this.setState({date: new Date()});

	}

	render(){
		return(
			<div>
				<h1> Hello {name}</h1>
				<h2> It is {this.state.date.toLocaleTimeString()}</h2>
			</div>

			);
		}
}

function App(){
	return(
		<div>
			<Clock/>,
			<Clock/>,
			<Clock/>
		</div>
		)


}

ReactDom.render(
		<App/>,
		document.getElementById("root")
		);








