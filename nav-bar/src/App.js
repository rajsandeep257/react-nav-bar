import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo'
import Links,{Links1,Links2} from './components/Links';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <div className='logo'> <Logo></Logo></div>
      <div className='links'>
        <Links></Links>
        <Links1></Links1>
        <Links2></Links2>
      </div>
      <div><Button></Button></div>
    </div>
   
  );
}

export default App;
