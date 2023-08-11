const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [
  { id: '#1', name: 'User 1', tickets: [] },
  { id: '#2', name: 'User 2', tickets: [] },
  { id: '#3', name: 'Charlie', tickets: [] },
 { id: '#4', name: 'David', tickets: [] },
 { id: '#5', name: 'Eve', tickets: [] }
];

const tickets = [
  { id: 'T1', description: 'Ticket 1 description', assignedTo: '#1', raisedBy: '#2' },
  { id: 'T2', description: 'Ticket 2 description', assignedTo: '#2', raisedBy: '#1' },
 { id: 'T3', description: 'Printer not working', assignedTo: '#3', raisedBy: '#4' },
  { id: 'T4', description: 'Email configuration issue', assignedTo: '#1', raisedBy: '#5' },
  { id: 'T5', description: 'Application crash on startup', assignedTo: '#4', raisedBy: '#3' }
];


app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Get all tickets
app.get('/tickets', (req, res) => {
  res.json(tickets);
});

// Create a new ticket
app.post('/tickets', (req, res) => {
  const newTicket = req.body;
  tickets.push(newTicket);
  res.status(201).json(newTicket);
});

app.listen(3000, () => {
  console.log(`Server is running `);
});