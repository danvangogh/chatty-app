 import React, {Component} from 'react';

class Chatbar extends Component {
	constructor(props) {
		super(props)
	}
	handleKeyPress = event => {
			if (event.key === 'Enter') {
			let message = {
				type: "postMessage",
				username: this.props.currentUser.name,
				content: event.target.value
			};
			this.props.addChatMsg(message);
			event.target.value = '';
		}
	}

	render() {
		return (
			<footer className="chatbar">
					<input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue = {this.props.username} name="newUsernameInput" onKeyDown={this.props.newName}/>
					<input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessageInput" defaultValue = '' onKeyDown={this.handleKeyPress}/>
			</footer>
		)
	}
}
export default Chatbar;
