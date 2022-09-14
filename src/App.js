// @ts-nocheck
import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<h1>DurbanPoisonPew</h1>
				<Card style={{ }}>
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
      </header>

    </div>
  );
}

export default App;
