import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import AddressForm from './components/Form';
import Detail from './components/Detail';
import myImage from './imgs/location.jpg'

function App() {
  return (
    <div className="App">
      <Header/>
      <Detail img={myImage}/>
      <AddressForm/>
    </div>
  );
}

export default App;
