import { Route } from 'react-router-dom';
import Signinup from '../../components/SignIn';

function Auth() {
  return (
    <>
      <Route path='/auth/signin'>
        <Signinup isSignin />
      </Route>
      <Route path='/auth/signout'>Log out</Route>
      <Route path='/auth/signup'>
        <Signinup isSignin={false} />
      </Route>
    </>
  );
}

export default Auth;
