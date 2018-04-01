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

/*class Toggle extends React.Component{
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

*/

/*function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

ReactDom.render(
  <Page />,
  document.getElementById('root')
);
*/
/*const numbers = [1,2,3,4,5];

function ListIterms(props) {
	return <li> {props.value}</li>
}

function NumberList(props) {
	const numbers = props.numbers;
	const listIterms = numbers.map(number =>
		<ListIterms value = {number} />
		);
	
	return(
		<ul> {listIterms} </ul>
		)
}
	
ReactDom.render(
	<NumberList numbers = {numbers} />,
	document.getElementById("root")

	)*/

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];

function Blog(props) {
	const sidebar = (
		<ul>
		{props.posts.map(post =>
			<li key = {post.id}>
			{post.title}
			</li>
			)}
		</ul>
		);
	const content = props.posts.map(post=>
		<div key = {post.id}>
			<h3>
				{post.title}
			</h3>
			<p>
				{post.content}
			</p>
		</div>

		);
	return (
		<div>
			{sidebar}
			<hr/>
			{content}
		</div>
		);
}

ReactDom.render(
	<Blog posts = {posts} />,
	document.getElementById('root')
	)

