import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar.jsx"
import Message from "./Message.jsx"
import Chatbar from "./Chatbar.jsx"
import MessageList from "./MessageList.jsx"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {name: "Sans-Nom"},
      messages: []
    }
    this.addChatMsg = this.addChatMsg.bind(this);
    this.addNotification = this.addNotification.bind(this)
    this.newName = this.newName.bind(this)
  }
  componentDidMount(event) {

    this.socket = new WebSocket('ws://localhost:3001')

    this.socket.onopen = function(event) {
      console.log("Connected to Server")
    };

    this.socket.onmessage = function(event) {
      console.log("event.data at socket.onmessage= :", event.data)
      let msg = JSON.parse(event.data);
      let { type, id, username, content } = msg;
      let newMsg = { type, id, username, content };

      this.setState({ messages: this.state.messages.concat(newMsg)});
    }.bind(this);

    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   const newMessage = {type: "postMessage", username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   this.setState({messages: messages})
    // }, 3000);
  }
  addChatMsg(content) {
    console.log("content at addChatMsg: ", content)
    this.socket.send(JSON.stringify(content))
  }
  addNotification(content) {
    console.log("event.data = ", event.data)
    console.log("content at addNotification: ", content)
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
      <Navbar />
      <MessageList messages = {this.state.messages} currentUser = {this.state.currentUser}/>
      <Chatbar currentUser = {this.state.currentUser}  addChatMsg = {this.addChatMsg} addNotification = {this.addNotification} newName = {this.newName}/>
      </div>
    );
  }
}

export default App;
