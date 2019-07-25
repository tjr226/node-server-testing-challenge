const express = require('express');

const Users = require('../users/usersModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/users', (req, res) => {
  Users.getAll()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    Users.remove(id)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

server.post('/users', (req, res) => {
    const newUser = req.body;
    Users.insert(newUser)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        res.status(500).json(error);
    })
})

module.exports = server;
