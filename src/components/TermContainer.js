/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Terminal from '@joeashworth/react-animated-term';
import { Container } from 'react-bootstrap';


const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const termLines = [
	{
		text: 'durbanpoison',
		cmd: true,
	},
	{
		text: 'start',
		cmd: true,
	},
	{
		text: 'npm load model',
		cmd: false,
		repeat: true,
		repeatCount: 5,
		frames: spinner.map(function(spinner){
			return{
			text: spinner + 'Loading Model',
			delay: 40
			}
		})
	}
];



class TermContainter extends React.Component {
	render() {
		return (
			<Container>
			<TermContainer>
				<Terminal lines={termLines} interval={80} />
			</TermContainer>
			</Container>
		)
	}
}

export default TermContainer();
