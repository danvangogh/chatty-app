import React, {Component} from 'react';

class Message extends Component {
	render() {
		const messages = this.props.messages;
		const allMessages = messages.map((message) =>
			<div className="message">
				<span className="message-username">{message.username}</span>
				<span className="message-content">{message.content}</span>
			</div>
			);
		return (
			<div>
				{allMessages}
				<main className="message system">
				</main>
			</div>	
		)
	}
}

export default Message;