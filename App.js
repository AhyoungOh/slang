import Main_Page from './slang/src/Main_Page';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useReducer, createContext } from 'react';

function App() {
  // const [user, dispatch] = useReducer(userReducer, {
  //   username: '',
  //   location: '',
  // });

  return (
    <Router>
      <Main_Page />
    </Router>
  );
}

export default App;
