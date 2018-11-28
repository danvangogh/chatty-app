import React, {Component} from 'react';

class Chatbar extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		const onSubmit = event => {
			if (event.key === 'Enter') {
				event.preventDefault();
				this.props.addNewMessage(event.target.value);
				event.target.value = '';
			}
		}
		return (
			<footer className="chatbar">
					<input className="chatbar-username" placeholder="{Your Name (Optional)}" defaultValue = {this.props.currentUser.name} name="newUsernameInput"/>
					<input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessageInput" defaultValue = '' onKeyDown={onSubmit}/>
			</footer>
		)
	}
}
export default Chatbar;
