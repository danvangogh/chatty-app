import React, {Component} from 'react';

class Chatbar extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<footer className="chatbar">
				<form>
					<input className="chatbar-username" placeholder="{Your Name (Optional)}" defaultValue = {this.props.currentUser.name} />
					<input className="chatbar-message" placeholder="Type a message and hit ENTER" />
				</form>
			</footer>
		)
	}
}
export default Chatbar;