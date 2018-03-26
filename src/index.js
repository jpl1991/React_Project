/*import React from 'react'
import ReactDom from 'react-dom'



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
import React from 'react'
import ReactDom from 'react-dom'

function formateDate(date){
	return date.toLocaleString();
}

function Avatar(props){
	return (<img
			ClassName = "Avatar"
			src = {props.user.avatarUl}
			alt = {props.user.name}

	/>);
}

function User_info(props){
	return (
		<div ClassName = "user-infor">
			<Avatar user = {props.user}/>
			<div ClassName = "user-infor-name">
				{props.user.name}
			</div>
		</div>
		);
}



function Comment(props){
	return(
		<div ClassName = "Comment">
			<User_info user = {props.author}/>

			<div ClassName = "Comment-text">
				{props.text}
			</div>
			<div ClassName = "Comment-date">
				{formateDate(props.date)}
			</div>
		</div>

		);
}

const comment ={
	date: new Date(),
	text:'Learning React',
	author: {
		name:'Litte cat',
		avatarUl:'http://placekitten.com/g/64/64',

	},

};

ReactDom.render(
	<Comment date = {comment.date} text = {comment.text} author = {comment.author}/>,
	document.getElementById("root")
	);




