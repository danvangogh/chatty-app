import React, {Component} from 'react';
import MessageList from './MessageList.jsx'

class Message extends Component {
	constructor(props){
		super()
	}
	render() {
		const messages = this.props.messages;
		const currentUser = this.props.currentUser.name

		const allMessages = messages.map(message => {
			return message.type === "incomingMessage" ?
			<div className="message-content" key={message.id}>
				<span className="message-username">{message.username}</span>
				<span className="message-content">{message.content}</span>
			</div>
			:
			<div className="notification" key={message.id}>
  			<span className="notification-content">{message.username} changed their name to {this.props.currentUser}.</span>
			</div>
		})

		// const allMessages = messages.map((message) =>
		// 	<div className="message-content" key={message.id}>
		// 		<span className="message-username">{message.username}</span>
		// 		<span className="message-content">{message.content}</span>
		// 	</div>
		// );

		return (
			<div>
				{allMessages}
				<main className="message system">
				</main>
			</div>
		);
	}
}


export default Message;
