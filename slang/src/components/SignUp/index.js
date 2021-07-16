import './style.scss';
import '../../assets/fonts/Feather/feather.css';
import '../../assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import '../../assets/libs/aos/dist/aos.css';
import '../../assets/libs/choices.js/public/assets/styles/choices.min.css';
import '../../assets/libs/flickity-fade/flickity-fade.css';
import '../../assets/libs/flickity/dist/flickity.min.css';
import '../../assets/libs/highlightjs/styles/vs2015.css';
import '../../assets/libs/jarallax/dist/jarallax.css';
import '../../assets/libs/quill/dist/quill.core.css';
import '../../assets/mapbox-gl.css';
// <!-- Map -->
// <link href='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />

// <!-- Theme CSS -->
import '../../assets/css/theme.min.css';

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
  const creator_groupRef = useRef('');
  const user_groupRef = useRef('');
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
          creator_group: creator_groupRef.current.value,
          user_group: user_groupRef.current.value,
          id: idRef.current.value,
        }
      );
      dispatch({ type: 'signup', payload: userInfo.data.user });
      history.push('/');
      setErrorMsg(null);
    } catch (e) {
      setErrorMsg(e.response.data.message);
      console.error(e);
    }
  };
  return (
    <section class="section-border border-primary">
      <div class="container d-flex flex-column">
        <div class="row align-items-center justify-content-center no-gutters min-vh-100">
          <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11">
            <h1 class="mb-0 font-weight-bold text-center">Sign up</h1>
            <p class="mb-6 text-center text-muted">Be Slang Stan's User</p>

            {/* <form class="mb-6"> */}
            <div class="name">
              <label for="name">Name</label>
              <input
                type="Name"
                class="form-control"
                id="name"
                placeholder="e.g. mike lee"
                ref={usernameRef}
              />
            </div>
            <p></p>

            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@address.com"
                ref={emailRef}
              />
            </div>
            <p></p>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="creator_group"
                ref={creator_groupRef}
              />
              <label class="form-check-label" for="creator_group">
                Are you a creator group?
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="user_group"
                ref={user_groupRef}
              />
              <label class="form-check-label" for="user_group">
                Are you a user group?
              </label>
            </div>
            <p></p>

            <div class="form-group">
              <label for="id">ID</label>
              <input
                type="id"
                class="form-control"
                id="id"
                placeholder="mike"
                ref={idRef}
              />
            </div>
            <p></p>
            {/* <!-- Password --> */}
            <div class="form-group mb-5">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                ref={passwordRef}
              />
            </div>

            {/* <!-- Submit --> */}
            <button
              class="btn btn-block btn-primary"
              type="button"
              onClick={clickBtnHandler}
            >
              Sign up
            </button>
            {/* </form> */}

            {/* <!-- Text --> */}
            <p class="mb-0 font-size-sm text-center text-muted">
              Already have an account? <a href="signin.html">Log in</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
