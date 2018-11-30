import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<nav className="navbar">
				<a href="/" className="navbar-brand">L'app du Chat</a>
				<span className="navbar-counter">Oh la la! {this.props.usercount} chats sur le web!</span>
			</nav>
		);
	}
}

export default Navbar;
