import './style.scss';

import { useRef, useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';

function SignUp() {
  const { dispatch } = useContext(UserContext);
  const history = useHistory();
  const usernameRef = useRef('');
  const passwordRef = useRef('');
  const emailRef = useRef('');
  const creatorGroupRef = useRef('');
  const userGroupRef = useRef('');
  const idRef = useRef('');
  const [errorMsg, setErrorMsg] = useState(null);

  const clickBtnHandler = async () => {
    try {
      const userInfo = await axios.post(
        `${process.env.REACT_APP_API_SERVER}/api/auth`,
        {
          username: usernameRef.current.value,
          password: passwordRef.current.value,
          email: emailRef.current.value,
          // creatorGroup: creatorGroupRef.current.value,
          // userGroup: userGroupRef.current.value,
          creatorGroup: true,
          userGroup: false,
          id: idRef.current.value,
        }
      );
      dispatch({ type: 'signin', payload: userInfo.data.user });

      setErrorMsg(null);
      history.push('/');
    } catch (e) {
      setErrorMsg(JSON.stringify(e));
      console.error(e);
    }
  };
  return (
    <section class='section-border border-primary'>
      <div class='container d-flex flex-column'>
        <div class='row align-items-center justify-content-center no-gutters min-vh-100'>
          <div class='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
            <h1 class='mb-0 font-weight-bold text-center'>Sign up</h1>
            <p class='mb-6 text-center text-muted'>Be Slang Stan's User</p>

            {/* <form class="mb-6"> */}
            <div class='name'>
              <label for='name'>Name</label>
              <input
                type='Name'
                class='form-control'
                id='name'
                placeholder='e.g. mike lee'
                ref={usernameRef}
              />
            </div>
            <p></p>

            <div class='form-group'>
              <label for='email'>Email Address</label>
              <input
                type='email'
                class='form-control'
                id='email'
                placeholder='name@address.com'
                ref={emailRef}
              />
            </div>
            <p></p>

            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='creator_group'
                ref={creatorGroupRef}
              />
              <label class='form-check-label' for='creator_group'>
                Are you a creator group?
              </label>
            </div>

            <div class='form-check'>
              <input
                class='form-check-input'
                type='checkbox'
                value=''
                id='user_group'
                ref={userGroupRef}
              />
              <label class='form-check-label' for='user_group'>
                Are you a user group?
              </label>
            </div>
            <p></p>

            <div class='form-group'>
              <label for='id'>ID</label>
              <input
                type='id'
                class='form-control'
                id='id'
                placeholder='mike'
                ref={idRef}
              />
            </div>
            <p></p>
            {/* <!-- Password --> */}
            <div class='form-group mb-5'>
              <label for='password'>Password</label>
              <input
                type='password'
                class='form-control'
                id='password'
                placeholder='Enter your password'
                ref={passwordRef}
              />
            </div>

            {/* <!-- Submit --> */}
            <button
              class='btn btn-block btn-primary'
              type='button'
              onClick={clickBtnHandler}
            >
              Sign up
            </button>
            {/* </form> */}

            {/* <!-- Text --> */}
            <p class='mb-0 font-size-sm text-center text-muted'>
              Already have an account? <a href='signin.html'>Log in</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
