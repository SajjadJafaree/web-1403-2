const express = require('express');
const app = express();
const path = require('path');

const tasks = [];

app.use(express.static(path.join(__dirname)));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '10-app-a.html'));
});

app.post('/add', (req, res) => {
    const newTask = req.body.task;
    tasks.push(newTask);
    res.json({ message: 'Task added', tasks: tasks });
});

app.get('/tasks', (req, res) => {
    res.json({ tasks: tasks });
});


app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});