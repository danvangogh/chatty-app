import React, {Component, Fragment} from 'react';
import Navbar from "./Navbar.jsx"
import Message from "./Message.jsx"
import Chatbar from "./Chatbar.jsx"
import MessageList from "./MessageList.jsx"

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

    this.socket = new WebSocket('ws://localhost:3001')

    this.socket.onopen = function(event) {
      console.log("Connected to Server")
    };

    // const that = this;
    this.socket.onmessage = function(event) {
      let msg = JSON.parse(event.data);
      let { id, username, content } = msg;
      let newMsg = { id, username, content };
      //
      // function newState() {
      //   console.log("got to newState")
      //   oldMessages.setState({
      //   messages: [...oldMessages, newMsg]
      //   });
      // }
      this.setState({ messages: this.state.messages.concat(newMsg)});
    }.bind(this);

    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }
  addChatMsg(content) {
    this.socket.send(JSON.stringify(content))
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
