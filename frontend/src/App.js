import Routes from './routes';
import './App.css';
import NavBar from './components/NavBarComponent';
import { BrowserRouter, Router, Switch } from 'react-router-dom';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
