import HobbyIntroduction from './components/Introduction.js';
import Projects from './components/Projects.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: YouTube Content Creator</h1>
      <HobbyIntroduction/>
      <Projects/>
    </div>
  );
}

export default App;
