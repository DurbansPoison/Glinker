// @ts-nocheck
import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import TermContainer from './components/TermContainer';
import ModelDisplay from 
function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <h1>DurbanPoisonPew</h1>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
	  <body className='App-body'>

	  <Card style={{ }}>
				<Card.Title className='CardTitle'>Links</Card.Title>
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
				<Button href='https://cults3d.com/en/creations/mine' variant='secondary' className='Link'>
					Cults3d
				</Button>
				<Button
					href='https://www.instagram.com/durbanpoisonpew/'
					variant='secondary' className='Link'>
					Instagram
				</Button>
				{/* <Button href='https://www.etsy.com/shop/DurbanPoisonPew?ref=seller-platform-mcnav' variant='secondary' className='Link'>
					My Store
				</Button> */}
			</Card>
	  </body>
	  {/* <TermContainer /> */}
    </div>
  );
}

export default App;
