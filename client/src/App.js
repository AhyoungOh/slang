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
// 프로젝트 환경변수 설정을 위해 (.env 파일의 변수를 가지고옴)
import dotenv from 'dotenv';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
dotenv.config();

function App() {
  return (
    <Router>
      <Route exact path='/' component={ButtonPage} />
      <Header />
      <Switch>
        <Route path='/auth'>
          <Auth />
        </Route>
        <Route path='/list'>
          <ListPage />
        </Route>
        <Route path='/creator_login'>
          <UploadSlangDictPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
