import { BrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="projectBody">
        <HomePage />
      </div>
    </BrowserRouter>    
  );
}

export default App;
