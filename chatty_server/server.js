const express = require('express');
const webSocket = require('ws');
const SocketServer = webSocket.Server;
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
const clients = [];

wss.on('connection', (ws) => {
  console.log('Client connected');

  const userCount = {
    type: 'clientCount',
    count: wss.clients.size
  };

  clients.push(ws)
  //Broadcast the number of users to all users
  wss.clients.forEach(function each(client) {
    if (client.readyState === webSocket.OPEN) {
      client.send(JSON.stringify(userCount));
    }
  })

  ws.onmessage = function (event) {
    console.log('event.data', JSON.parse(event.data));
    const parsed = JSON.parse(event.data);
    const { type, username, content } = parsed;
    const msg = { type, id: uuidv4(), username, content };

    switch(msg.type) {
      case ('postNotification'):
        msg.type = 'incomingNotification';
        break;
      case ('postMessage'):
        msg.type = 'incomingMessage';
        break;
      default:
      console.log("Unknown event type " + parsed.type)
    }

    clients.forEach(function each(client) {
      if (client.readyState === webSocket.OPEN) {
        client.send(JSON.stringify(msg));
      }
    })
  }
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    userCount.count = wss.clients.size;
    wss.clients.forEach(function each(client) {
      if (client.readyState === webSocket.OPEN) {
        client.send(JSON.stringify(userCount));
      }
    })
  });
});
