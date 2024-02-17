import './App.css';
import Header from '../header/Header';
import Products from '../products/Products';
import StepByStep from '../stepByStep/StepByStep';

function App() {
  return (
    <div className="App">
      <Header/>
      <Products/>
      <StepByStep/>
    </div>
  );
}

export default App;
