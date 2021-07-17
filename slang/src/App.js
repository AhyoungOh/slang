//import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
//import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import ListPage from './pages/List';
import NavigationPage from './pages/NavigationPage';
import UploadSlangDictPage from './pages/UploadSlangDict';
import './styles/global-style.scss';

function App() {
  return (
    <Router>
      <Route exact path='/' component={NavigationPage} />
      <Switch>
        <Route path='/signin'>
          <SignInPage />
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
    // <InputMeaningSlang />
  );
}

export default App;
