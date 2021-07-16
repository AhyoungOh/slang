//import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp';
//import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import ListPage from './pages/List';
import ButtonPage from './pages/Button';
import './styles/global-style.scss';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ButtonPage} />
      <Switch>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/list">
          <ListPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
