import React from 'react'
import ReactDom from 'react-dom'



let name = 'Peilin Jiang'

setInterval(function() {
	ReactDom.render(


	<h2>Time now:- {new Date().toLocaleString()}</h2>,

	document.getElementById('root')

	);
},1000);



