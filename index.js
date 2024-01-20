const express = require('express');
const app = express();
// serve the dist file and not try to run them on the server 
app.use(express.json());
app.use(express.static('react-app/dist'));

//listen to incoming HTTP requests
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


// add a server-side api to our React app 
app.get('/api/privates/:id', (req, res) => {
	const id = req.params.id;
	const private = getPrivate(id);
	if (!private) {
		res.status(404).send({ error: `Private ${id} not found`});
	}
	else {
		res.send({ data: private });
	}
})

function getPrivate(id){
	const privates = [
		{id: 1, name: '1aaa', active: '1234-1234', country:'Germany'},
		{id: 2, name: '2aaa', active: '1234-1234', country:'Germany'},
		{id: 3, name: '3aaa', active: '1234-1234', country:'Germany'},
		{id: 4, name: '4aaa', active: '1234-1234', country:'Germany'},
		{id: 5, name: '5aaa', active: '1234-1234', country:'Germany'},
	];
	return privates.find(p => p.id == id );
}