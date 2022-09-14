import logo from './logo.png';
import './App.css';
import LinkerContainer from './components/linkerContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
			<body>
				<LinkerContainer />
			</body>
    </div>
  );
}

export default App;
