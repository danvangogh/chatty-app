import React, {Component} from 'react';
import Message from "./Message.jsx";

class MessageList extends Component{
	render() {
		return(
			<div>
				<main className="message">
					<Message messages={this.props.messages} currentUser = {this.props.currentUser.name} />
				</main>
			</div>
		);
	}
}

export default MessageList;
