const express = require('express');
const cors = require('cors');
const error = require('./middleware/error');
const root = require('./controller/router');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT'],
  }
});


io.on('connection', socket => {
  socket.on('updatePhoneBook', ({name, email, phone}))
})

app.use(express.json());
app.use(cors());
app.use(root);
app.use(error);

app.listen(3001, () => console.log('app running on 3001'));

http.listen(4000, () => console.log('socket running on port 4000'));

