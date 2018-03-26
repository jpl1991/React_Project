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

let name = 'Peilin Jiang'

class Clock extends React.Component{
	constructor(props){
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
			<Clock/>
			<Clock/>
			<Clock/>
		</div>
		)


}

ReactDom.render(
		<App/>,
		document.getElementById("root")
		);










