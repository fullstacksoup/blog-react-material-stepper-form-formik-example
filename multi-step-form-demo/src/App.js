import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { createBrowserHistory } from "history";
import AppLayout from 'components/layouts/AppLayout';

// Enable Browser History for Back and Forward Button
export const appHistory = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={appHistory}>                                      
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;