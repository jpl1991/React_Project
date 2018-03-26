import React from 'react'
import ReactDom from 'react-dom'



//let name = 'Peilin Jiang'

//function must be a capital letter
function Cartoon(props){
	return <h1> Hello, {props.name}, {props.lastname}</h1>
};

function Show(props){
	return <div>
			<Cartoon name = "Peilin" lastname = "Jiang"/>
			<Cartoon name = "Peiru" lastname = "Jiang"/>
			</div>
};
/*class Cartoon extends React.Component{

	render(){
		return <h1>hello, {this.props.name}</h1>
	}
}*/



ReactDom.render(

	<Show/>,

	document.getElementById("root")
);


