const express = require('express')
const path = require('path')
const app = express()
const fs = require('fs')
const port = 3000
const ip = '127.0.0.1'

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


const filePath = path.join(__dirname, 'todos.json')

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/app.html");
  	})


// GET Request for Reading Data
app.get('/todos', (req, res) => {
	fs.readFile(filePath, 'utf8' , (err,data) => {
		res.json(JSON.parse(data));
  	})
})


// POST Request for writing new Data
app.post('/todos',(req, res) => {
  
	const {id , task , completed} = req.body
 	const newdata = {id , task , completed}


 	fs.readFile(filePath , 'utf8' , (err,data) => {
 	  
 		const arr = (JSON.parse(data));
		arr.push(newdata)

		fs.writeFile(filePath,JSON.stringify(arr,null,2), 'utf8' ,() => {
   			res.send(`New Record is Created with ID ${id}`)
		})

	})

})

// PATCH Request for Updating Data
app.patch('/todos/:id' , (req , res) => {
  
  const userID = Number(req.params.id)
  const update = req.body
  
  fs.readFile(filePath , 'utf8' , (err,data) => {
 		const arr = (JSON.parse(data))
 		const item = arr.find(obj => 
 		obj.id === userID)
 		if(item){
 		  item.completed = update.completed
 		}
 
		fs.writeFile(filePath,JSON.stringify(arr,null,2), 'utf8' ,() => {
   			res.send(`ID ${userID} is set to ${update.completed}`)
		})

	})
})


// DELETE Request for Deleting Data
app.delete('/todos/:id' , (req,res) => {
  
  const userID = Number(req.params.id)
  
  fs.readFile(filePath , 'utf8' , (err,data) => {
 		const arr = (JSON.parse(data))
 		const index = arr.findIndex(obj => 
 		obj.id === userID)
 		if(index != -1){
 		  arr.splice(index,1)
 		}
 
		fs.writeFile(filePath,JSON.stringify(arr,null,2), 'utf8' ,() => {
   			res.send(`Deleted ID ${userID}`)
		})

	})
})

app.listen(port,`${ip}`, () => {
	console.log(`Example app listening on port ${port} and ${ip}`)
})