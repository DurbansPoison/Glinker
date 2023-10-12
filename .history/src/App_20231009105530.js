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
						href=''
						varriant='secondary'
						className='Link'>
							DIY MAC BETA Link

					<Button
						href='https://www.etsy.com/shop/DurbanPoisonPew/edit?ref=edit_trust_header'
						varriant='secondary'
						className='Link'>
						Merch
					</Button>
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
						href='https://www.instagram.com/durbanpoisonpew/'
						variant='secondary'
						className='Link'>
						Instagram
					</Button>
					<Button
						href='https://www.twitter.com/durbanpoisonpew'
						variant='secondary'
						className='Link'>
						Twitter
					</Button>
					<Button href='https://ko-fi.com/durbanpoisonpew'
							variant='secondary'
							className='Link'>
						Buy Me A Coffee
					</Button>
					<Button href='https://arewecoolyet.wtf/'
							variant='secondary'
							className='Link'>
						Are We Cool Yet?
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
