import React from 'react'
import ReactDom from 'react-dom'

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
		<ul> {listIterms}</ul>
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