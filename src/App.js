import { React } from 'react';

import { NavigationBar, } from './components';
import { Home, } from './pages';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
