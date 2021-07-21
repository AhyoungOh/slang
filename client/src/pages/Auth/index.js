import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

function Auth() {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <Switch>
      <Route path={`${url}/signin`}>
        <SignIn />
      </Route>
      <Route path='/signout'>Log out</Route>
      <Route path={`${url}/signup`}>
        <SignUp />
      </Route>
    </Switch>
  );
}

export default Auth;
