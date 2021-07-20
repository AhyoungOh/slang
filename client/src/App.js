//import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignUp from './SignUp';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import ListPage from './pages/List';
import NavigationPage from './pages/NavigationPage';
import UploadSlangDictPage from './pages/UploadSlangDict';
import './styles/global-style.scss';

import { useReducer, createContext } from 'react';
import dotenv from 'dotenv';
dotenv.config();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        id: action.payload.id,
        password: action.payload.password,
      };
    case 'signout':
      return { id: '', password: '' };
    default:
      throw new Error();
  }
};

export const UserContext = createContext(null);

function App() {
  const [user, dispatch] = useReducer(userReducer, {
    id: '',
    password: '',
  });
  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <Router>
        <Route exact path='/' component={NavigationPage} />
        <Switch>
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route path='/signup'>
            <SignUpPage />
          </Route>
          <Route path='/list'>
            <ListPage />
          </Route>
          <Route path='/creator_login'>
            <UploadSlangDictPage />
          </Route>
        </Switch>
      </Router>
      {/* // <InputMeaningSlang /> */}
    </UserContext.Provider>
  );
}

export default App;
