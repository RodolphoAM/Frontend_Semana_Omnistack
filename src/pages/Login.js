import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
	state = {
		username: '',
	};

	handleSubmit = e => {
		//essa linha de comando impede que o form no leve a outra página
		//que é o evento padrão quando se dá submit num formulário
		e.preventDefault();

		const { username } = this.state;

		//aborta a função se o valor passado for nulo
		if(!username.length) return;

		//esse primeiro parâmetro é o nome do dado a ser salvo no storage local
		localStorage.setItem('@GoTwitter:username', username);
	
		//essa função leva o usuário à página timeline depois de dar submit no form
		this.props.history.push('/timeline');
	};

	//o parâmetro passado para a função é a informação do evento onChange
	//então o novo username está em "e"
	handleInputChange = e => {
		this.setState({ username: e.target.value });
	};

	render() {
		return (
			<div className="login-wrapper">
				<img src={twitterLogo} alt="GoTwitter" />
				<form onSubmit={this.handleSubmit}>
					<input 
						value={this.state.username}
						onChange={this.handleInputChange}
						placeholder="Nome de usuário"
					/>
					<button type="submit" />
				</form>
			</div>
		);
	}
}