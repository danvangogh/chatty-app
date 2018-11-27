import React, {Component} from 'react';
import Navbar from "./Navbar.jsx"
import Message from "./Message.jsx"
import Chatbar from "./Chatbar.jsx"
import MessageList from "./MessageList.jsx"

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Message />
      <MessageList />
      <Chatbar />
      </div>
    );
  }
}
export default App;