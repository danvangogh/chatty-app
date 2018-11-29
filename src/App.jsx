import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar.jsx"
import Message from "./Message.jsx"
import Chatbar from "./Chatbar.jsx"
import MessageList from "./MessageList.jsx"

const socket = new WebSocket('ws://localhost:3001');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    }
    this.addChatMsg = this.addChatMsg.bind(this);
  }
  componentDidMount(event) {

    this.socket = {
      socket
    };

    socket.onopen = function(event) {
      console.log("Connected to Server")
    };

    socket.onmessage = function(event) {
      const msg = JSON.parse(event.data);
      console.log('msg from server!!!!!', msg);
    }

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }
  addChatMsg(content) {
    // let message = {
    //   id: this.state.messages.length + 1,
    //   username: this.state.currentUser.name,
    //   content: content
    // };
    socket.send(JSON.stringify(content))
  }
  render() {
    return (
      <div>
      <Navbar />
      {/* <Message  /> */}
      <MessageList messages = {this.state.messages}/>
      <Chatbar currentUser = {this.state.currentUser} addChatMsg = {this.addChatMsg}/>
      </div>
    );
  }
}

export default App;
