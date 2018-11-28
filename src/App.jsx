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
      messages: [
         {
          id: 1,
          username: "Bob",
          content: "Has anyone seen my marbles?"
        },
        {
          id: 2,
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
    this.addNewMessage = this.addNewMessage.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }
  addNewMessage(content) {
    let userInput = {
      id: this.state.messages.length + 1,
      username: this.state.currentUser.name,
      content: content
    };
    const currentMessages = this.state.messages;
    const allMessages = [...currentMessages, userInput]
    this.setState({
      messages: allMessages
    });
  }
  render() {
    return (
      <div>
      <Navbar />
      {/* <Message  /> */}
      <MessageList messages = {this.state.messages}/>
      <Chatbar currentUser = {this.state.currentUser} addNewMessage = {this.addNewMessage}/>
      </div>
    );
  }
}

export default App;
