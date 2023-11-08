import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';



/**
 * TODO:DOCSTRINGs
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
