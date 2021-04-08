import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // BEM - Naming policy (lowercase)
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons /> 
    </div>
  );
}

export default App;
