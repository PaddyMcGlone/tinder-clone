import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    // BEM - Naming policy (lowercase)
    <div className="app">
      <Header />
      <TinderCards />

      {/* <Header />
      <TinderCards />
      <SwipeButtons /> */}

    </div>
  );
}

export default App;
