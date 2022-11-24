import logo from './logo.png';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='title'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1>DurbanPoisonPew</h1>
				</div>
			</header>
			<body className='App-body'>
				<Card style={{}}>
					<Card.Title className='CardTitle'>
						<u>Links:</u>
					</Card.Title>
					<Button
						href='https://odysee.com/@DurbanPoisonPew:9'
						varriant='secondary'
						className='Link'>
						Odysee
					</Button>
					<Button
						href='https://defcad.com/users/durbanpoisonpew/'
						varriant='secondary'
						className='Link'>
						Defcad
					</Button>
					<Button
						href='https://cults3d.com/en/users/durbanpoisonpew/creations'
						variant='secondary'
						className='Link'>
						Cults3d
					</Button>
					<Button
						href='https://www.instagram.com/durbanpoisonpew/'
						variant='secondary'
						className='Link'>
						Instagram
					</Button>
					{/* <Button href='https://www.etsy.com/shop/DurbanPoisonPew?ref=seller-platform-mcnav' variant='secondary' className='Link'>
					My Store
				</Button> */}
				</Card>
			</body>
		</div>
	);
}

export default App;
