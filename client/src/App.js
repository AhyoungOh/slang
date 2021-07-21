import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
//import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import ListPage from './pages/List';
import Auth from './pages/Auth';
import ButtonPage from './pages/Button';
import Header from './components/Header';
import UploadSlangDictPage from './pages/UploadSlangDict';
import './styles/global-style.scss';
import { useReducer, createContext } from 'react';
// 프로젝트 환경변수 설정을 위해 (.env 파일의 변수를 가지고옴)
import dotenv from 'dotenv';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
dotenv.config();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {
        username: action.payload.username,
        location: action.payload.location,
      };
    case 'signout':
      return { username: '', location: '' };
    default:
      throw new Error();
  }
};

export const UserContext = createContext(null);

function App() {
  const [user, dispatch] = useReducer(userReducer, {
    username: '',
    location: '',
  });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      <Router>
        <Route exact path='/' component={ButtonPage} />
        <Header />
        <Switch>
          <Route path='/signin'>
            <SignInPage />
          </Route>
          <Route exact path='/auth'>
            <Auth />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/list'>
            <ListPage />
          </Route>
          <Route path='/creator_login'>
            <UploadSlangDictPage />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
