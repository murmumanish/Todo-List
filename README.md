# This is a Basic Todo List 

This is a basic Todo List application built using Express.js.
It provides simple REST APIs to add, update, and delete tasks.

The project is designed to demonstrate how a backend CRUD API works using Node.js and Express.

This Project is based on Commonjs.



# How to use 

### Git Clone this Repo
```
git clone https://github.com/gopalkpandit/Todo-List.git
```

### Go inside Todo List Directory
```bash
cd Todo-List 
```
### Start the Server
```js
node index.js
```

### Web UI
```
http://127.0.0.1:3000/
```


# 1. Add Task
#### Curl Command Example: 
```curl
curl -X POST http://127.0.0.1:3000/todos \
-H 'Content-Type: application/json' \
-d '{"id":12,"task":"Complete my DBMS Homework","completed":false}'
```

#### Response:
```txt
New Record is Created with ID 12
```

# 2. Update Task

#### Curl Command Example: 
```curl
curl -X PATCH http://127.0.0.1:3000/todos/12 \
-H 'Content-Type: application/json' \
-d '{"completed":true}'
```

#### Response:
```txt
ID 12 is set to true
```

# 3. Delete Task

#### Curl Command Example: 
```curl
curl -X DELETE http://127.0.0.1:3000/todos/12
```

#### Response:
```txt
Deleted ID 17
```


# Tech Stack

- ## Node.js
- ## Express.js
- ## Currently we have a todos.json for storing Task
