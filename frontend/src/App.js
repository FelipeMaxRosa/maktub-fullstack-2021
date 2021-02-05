import Routes from './routes';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
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
