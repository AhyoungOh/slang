import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignUp from './SignUp';
import AuthPage from './pages/Auth';
// import SignUpPage from './pages/SignUp';
// import SignInPage from './pages/SignIn';
import ListPage from './pages/List';
// import ButtonPage from './pages/Button';
import NavigationPage from './pages/NavigationPage';
import UploadSlangDictPage from './pages/UploadSlangDict';
import Header from './components/Header';
import Checkup from './components/Checkup';
import './styles/global-style.scss';

import { useReducer, createContext } from 'react';
import dotenv from 'dotenv';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
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
        <Header />
        <Route exact path='/' component={NavigationPage} />
        <Switch>
          <Route path='/auth'>
            <AuthPage />
          </Route>
          <Route path='/list'>
            <ListPage />
          </Route>
          <Route path='/dictionary'>
            <UploadSlangDictPage />
          </Route>
          <Route path='/checkup'>
            <Checkup />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
