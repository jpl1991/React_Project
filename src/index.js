import React from 'react'
import ReactDom from 'react-dom'
import { SketchPicker } from 'react-color';

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

/*const posts = [
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
	)*/

/*class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


ReactDom.render(
	<EssayForm />,
	document.getElementById("root")

	)*/

/*class Reservation extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests:2
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event){
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]:value
		})
	}


	render(){
		return(
			<form>
				<label>
					Is going:
					<input
						name = "isGoing"
						type = "checkbox"
						checked = {this.state.isGoing}
						onChange = {this.handleInputChange}
					/>
				</label>
				<br/>
				<label>
					Number of guests:
					<input
						name = "numberOfGuests"
						type = "number"
						value = {this.state.numberOfGuests}
						onChange = {this.handleInputChange}
					/>
				</label>
			</form>

			);
	}
}

ReactDom.render(
	<Reservation />,
	document.getElementById("root")
	)
*/

// lifting state up

/*function BoilingVerdict(props) {
	if(props.celsius >= 100){
		return <p>The water would boil</p>;
	}
	return <p>The water would not boil</p>;
}

class Cacculator extends React.Component{
	constructor(props){
		super(props);
		this.state ={ temperature: ''};
		this.handleChange = this.handleChange.bind(this);

	}

	handleChange(e){
		this.setState({temperature: e.target.value});
	}

	render(){
		const temperature = this.state.temperature;

		return(
			<fieldset>
				<legend>Enter temperature in Celsius: </legend>
				<input
					value = {temperature}
					onChange = {this.handleChange}
				/>

				<BoilingVerdict celsius = {parseFloat(temperature)} />

			</fieldset>
			);
	}
}

ReactDom.render(
	<Cacculator />,
	document.getElementById("root")
	)*/


/*const scaleName = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temperature: ''};

	}

	handleChange(e){
		this.setState({
			temperature: e.target.value
		});
	}


	render(){
		const temperature = this.state.temperature;
		const scale = this.props.scale;

		return(
			<fieldset>
				<legend>
					Enter temperature in {scaleName[scale]}:
				</legend>
				<input value = {temperature}
						onChange = {this.handleChange}/>
			</fieldset>
			);
	}
}

class Cacculator extends React.Component{
	render(){
		return(
			<div>
				<TemperatureInput scale = 'c' />
				<TemperatureInput scale = "f" />
			</div>);
	}
}

ReactDom.render(
	<Cacculator />,
	document.getElementById('root')
	)

*/

// lifting state up
/*
const scaleName = {
	c: 'Celsius',
	f: 'Fahrenheit'
};

function BoilingVerdict(props) {
	if(props.celsius >= 100){
		return <p>The water would boil</p>;
	}
	return <p>The water would not boil</p>;
}

class TemperatureInput extends React.Component{
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temperature: '', scale: 'c'};

	}

	handleChange(e){
		// this.setState({
		// 	temperature: e.target.value
		// });
		this.props.onTemperatureChange(e.target.value);
	}

	
	render(){
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return(
			<fieldset>
				<legend>
					Enter temperature in {scaleName[scale]}:
				</legend>
				<input value = {temperature}
						onChange = {this.handleChange}/>
			</fieldset>
			);
	}
}

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
		this.state = {temperature: '', scale: 'c'};
	}

	
	handleCelsiusChange(temperature){
		this.setState({
			scale: 'c',
			temperature
		});
	}

	handleFahrenheitChange(temperature){
		this.setState({
			scale: 'f',
			temperature
		});
	}	

	render(){
		const scale = this.state.scale;
		const temperature = this.state.temperature;

		const celsius = scale === 'f'? tryConvert(temperature, toCelsius): temperature;

		const fahrenheit = scale ==='c'? tryConvert(temperature, toFahrenheit): temperature;
		return(
			<div>
				<TemperatureInput scale = 'c' temperature = {celsius}  onTemperatureChange = {this.handleCelsiusChange}/>
				<TemperatureInput scale = "f" temperature = {fahrenheit} onTemperatureChange = {this.handleFahrenheitChange}/>
				<BoilingVerdict celsius = {parseFloat(celsius)}/>
			</div>);
	}
}

function toCelsius(fahrenheit) {
	return (fahrenheit-32)*5/9 ;
}

function toFahrenheit(celsius){
	return (celsius*9 / 5) +32 ;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if(Number.isNaN(input)){
		return	'';
	}
	const output = convert(input);
	const rounded = Math.round(output*1000)/1000 ;
	return rounded.toString();
}

ReactDom.render(
	<Calculator />,
	document.getElementById('root')
	)
*/

/*function Splitpane(props) {
	return(
		<div className = "splitpane">
			<div className = 'splitpane-left' >
				{props.left}
			</div>
			<div className = 'splitpane-right' >
				{props.right}
			</div>
		</div>
		);
}

function App() {
	return(
		<Splitpane left={<Contact/>} right = {<Chat/>} />
		);
}

function Contact() {
	return <div className = "contact" />
}

function Chat() {
	return <div className = 'chat' />
}

ReactDom.render(
	<App />,
	document.getElementById('root')
	)
*/
//specialization

/*function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color }>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color = {{color: "blue"}}>	
      <h1 className="Dialog-title" >
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
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
			<Dialog title = 'Mars Exploration Program' message = 'How should we refer to you?'>
				<input value = {this.state.login} onChange = {this.handleChange} />
				<button onClick = {this.handleSignUp}>
					Sign Me Up!
				</button>
			</Dialog>
			);
	}
}

class Component extends React.Component {

  render() {
    return <SketchPicker />;
  }
}


ReactDom.render(
	<SignUpDialog />,
	document.getElementById('root')
	)
*/

class ProductCategoryRow extends React.Component{
	render(){
		const category = this.props.category;
		return(
			<tr>
				<th colSpan='2'>
					{category}
				</th>
			</tr>
			);
	}
}

class ProductRow extends React.Component{
	render(){
		const product = this.props.product;
		const name = product.stocked ? product.name:
			<span style = {{color: 'red'}}>
				{product.name}
			</span>
		return(
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
			);
	}
}

class ProductTable extends React.Component{
	render(){
		const filterText = this.props.filterText;
		const inStockOnly = this.props.inStockOnly;

		const rows = [];
		let lastCategory = null;

		this.props.product.forEach((product)=>{
			if(product.name.indexOf(filterText) === -1){
				return;
			}

			if(inStockOnly&&!product.stocked){
				return;
			}

			if(product.category !== lastCategory){
				rows.push(<ProductCategoryRow category = {product.category} key = {product.category} />);

			}
			rows.push(<ProductRow product = {product} key = {product.name} />);
			lastCategory = product.category;
		});
	
	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
		);
	}
}

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}

	handleFilterTextChange(e){
		this.props.onFilterTextChange(e.target.value);
	}

	handleInStockChange(e){
		this.props.onInStockChange(e.target.checked);
	}

	render(){
		//const filterText = this.props.filterText;
		//const inStockOnly = this.props.inStockOnly;

		return(
			<form>
				<input type = "text" placeholder = "Search..."  value = {this.props.filterText} onChange = {this.handleFilterTextChange}/>
				<p>
					<input type = "checkbox" checked = {this.props.inStockOnly} onChange ={this.handleInStockChange} />
					{' '}
					Only show products in stock
				</p>
			</form>
			);
	}
}

class FilterableProductTable extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			filterText: '',
			inStockOnly: false
		};
		this.handleFilterTextChange = this.handleFilterTextChange.bind(
			this);
		this.handleInStockChange = this.handleInStockChange.bind(this);
	}
	handleFilterTextChange(filterText){
		this.setState({
			filterText: filterText
		});
	}
	handleInStockChange(inStockOnly){
		this.setState({
			inStockOnly:inStockOnly
		});
	}

	render(){
		return(
			<div>
				<SearchBar filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly}
					onFilterTextChange = {this.handleFilterTextChange}
					onInStockChange = {this.handleInStockChange}/>
				<ProductTable product = {this.props.product} filterText = {this.state.filterText} inStockOnly = {this.state.inStockOnly} />
			</div>
			);
	}
}

const PRODUCTS = [
	{category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}

];

ReactDom.render(
	<FilterableProductTable product = {PRODUCTS} />,
	document.getElementById('root')
	);




