// @ts-nocheck
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
function LinkerContainer() {
	return (
		<Container className='LinkerContainer' style={{alignItems: 'center'}}>
			<Card style={{ width: '300px', height: '200px' }}>
				<Card.Title style={{color: 'white', fontWeight:'bolder', fontSize: '50px'}}>Durban's Links</Card.Title>
				<Button
					href='https://odysee.com/@DurbanPoisonPew:9'
					varriant='secondary' className='Link'>
					Odysee
				</Button>
				<Button
					href='https://defcad.com/users/durbanpoisonpew/'
					varriant='secondary' className='Link'>
					Defcad
				</Button>
				<Button href='https://github.com/DurbansPoison' variant='secondary' className='Link'>
					Github
				</Button>
				<Button
					href='https://www.instagram.com/durbanpoisonpew/'
					variant='secondary' className='Link'>
					Instagram
				</Button>
			</Card>
		</Container>
	);
}

export default LinkerContainer;
