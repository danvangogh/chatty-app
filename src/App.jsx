import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar.jsx"
import Message from "./Message.jsx"
import Chatbar from "./Chatbar.jsx"
import MessageList from "./MessageList.jsx"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {name: "Guy"},
      messages: [],
      usercount: 1
    }
    this.addChatMsg = this.addChatMsg.bind(this);
    this.addNotification = this.addNotification.bind(this)
    this.newName = this.newName.bind(this)
  }
  componentDidMount(event) {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onmessage = function(event) {
      let msg = JSON.parse(event.data);

      switch(msg.type) {
        case ('clientCount'):
          this.setState({
            usercount: msg.count
          })
          break;
        case ('incomingMessage'):
        case ('incomingNotification'):
          let { type, id, username, content } = msg;
          let newMsg = { type, id, username, content };
          this.setState({ messages: this.state.messages.concat(newMsg)});
      }
    }.bind(this);
  }
  addChatMsg(content) {
    this.socket.send(JSON.stringify(content))
  }
  addNotification(content) {
    this.socket.send(JSON.stringify(content))
  }
  newName(event) {
    let changedName = event.target.value;
		if (event.key === 'Enter') {
			let message = {
				type: "postNotification",
				username: this.state.currentUser.name,
				content: ''
			}
			this.addNotification(message);
      this.setState({
  			currentUser: {name: event.target.value}
  		});
    }
	}

  render() {
    return (
      <div>
      <Navbar usercount = {this.state.usercount}/>
      <MessageList messages = {this.state.messages} currentUser = {this.state.currentUser}/>
      <Chatbar currentUser = {this.state.currentUser}  addChatMsg = {this.addChatMsg} addNotification = {this.addNotification} newName = {this.newName}/>
      </div>
    );
  }
}

export default App;
