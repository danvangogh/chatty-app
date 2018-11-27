import React, {Component} from 'react';

class MessageList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			messages: [
				{
					type: "incomingMessage",
					content: "I won't be impressed with technology until I can download food.",
					username: "Anonymous1"
				},
				{
					type: "incomingNotification",
					content: "Anonymous1 changed their name to nomnom",
			}]
		};
	}
		render() {
			return (
				<div>
				</div>	
			)
	}
}

export default MessageList;