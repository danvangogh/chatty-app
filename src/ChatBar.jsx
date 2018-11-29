import React, {Component} from 'react';

class Chatbar extends Component {
	handleKeyPress = event => {
			if (event.key === 'Enter') {
			let message = {
				id: 5,
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
					<input className="chatbar-username" placeholder="{Your Name (Optional)}" defaultValue = {this.props.currentUser.name} name="newUsernameInput" />
					<input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessageInput" defaultValue = '' onKeyPress={this.handleKeyPress}/>
			</footer>
		)
	}
}
export default Chatbar;
