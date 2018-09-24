const express= require('express'),
			dotenv= require('dotenv').load();
const app= express();

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res)=>{
	res.sendFile(__dirname+'/views/index.html');
});

app.listen(process.env.SERVER_PORT);

console.log(`Server running at ${process.env.SERVER_PORT}`);