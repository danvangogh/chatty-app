import React, {Component} from 'react';

class Chatbar extends Component {
	constructor(props) {
		super(props)
		this.nameChange = this.nameChange.bind(this);
	}
	handleKeyPress = event => {
			if (event.key === 'Enter') {
			let message = {
				id: 5,
				username: this.state.currentUser.name,
				content: event.target.value
			};
			this.props.addChatMsg(message);
			event.target.value = '';
		}
	}
	nameChange = event => {
		this.setState({
			currentUser: {name: event.target.value}
		});
		console.log("currentUser = ", this.state.currentUser.name)
	}
	render() {
		return (
			<footer className="chatbar">
					<input className="chatbar-username" placeholder="Your Name (Optional)" defaultValue = {this.props.username} name="newUsernameInput" onChange={this.nameChange}/>
					<input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessageInput" defaultValue = '' onKeyDown={this.handleKeyPress}/>
			</footer>
		)
	}
}
export default Chatbar;
