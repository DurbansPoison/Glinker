// @ts-nocheck
import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import TermContainer from './components/TermContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <h1 className="App-Title">DURBANPOISONPEW</h1>
        <img src={logo} className="App-logo" alt="logo" />

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
				<Button href='https://www.durbanpoisonstore.com' variant='secondary' className='Link'></Button>
			</Card>
      </header>
	  {/* <TermContainer /> */}
    </div>
  );
}

export default App;
