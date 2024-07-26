import React, { Component } from 'react'

import './header.css'

class Header extends Component {
	state = { contactInfoClassname: 'contactInfoBlurred' }

	// Reveal contact info
	onContactInfoClick = event => {
		const { getLocaleString } = this.props
		event.preventDefault()
		if (window.confirm(getLocaleString('FAQ/HAVE-YOU-READ'))) {
			alert(getLocaleString('FAQ/HELP-IN-ENGLISH'))
			this.setState({ contactInfoClassname: 'contactInfo' })
		}
	}

	render() {
		const { contactInfoClassname } = this.state
		const { getLocaleString } = this.props
		return (
			<div className='header'>
				<h3>
					<a
						href='https://t.me/dalynka'
						target='_blank'
						rel='noopener noreferrer'
					>
						Телеграмм
					</a>
				</h3>
				<p>
					{getLocaleString('DESCRIPTION/1')}
					<a
						href='https://spworlds.ru/'
						target='_blank'
						rel='noopener noreferrer'
					>
						СП5
					</a>
					{getLocaleString('DESCRIPTION/2')}
					<br></br>
				</p>
			</div>
		)
	}
}

export default Header
