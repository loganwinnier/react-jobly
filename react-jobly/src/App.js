import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Nav from './Nav';
import RouteList from './RouteList';



/**
 * Renders RouteList and Nav bar
 * 
 * Index -> App -> RouteList, Nav
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
