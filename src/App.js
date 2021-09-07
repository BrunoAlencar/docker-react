import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hi there!!</p>
        <p>I was changed on the feature branch</p>
        <small>
          <hr />
          <strong>Coded by: </strong>
          <br />
          <i>{process.env.REACT_APP_AUTHOR_NAME}</i>
        </small>
      </header>
    </div>
  );
}

export default App;
