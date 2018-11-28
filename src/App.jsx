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
  }
  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
      console.log("just setState")
    }, 3000);
  }
  render() {
    return (
      <div>
      <Navbar />
      {/* <Message  /> */}
      <MessageList messages = {this.state.messages}/>
      <Chatbar currentUser = {this.state.currentUser} />
      </div>
    );
  }
}
export default App;