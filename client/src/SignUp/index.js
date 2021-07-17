import './style.scss';

function SignUp() {
  return (
    <section class='section-border border-primary'>
      <div class='container d-flex flex-column'>
        <div class='row align-items-center justify-content-center no-gutters min-vh-100'>
          <div class='col-12 col-md-5 col-lg-4 py-8 py-md-11'>
            <h1 class='mb-0 font-weight-bold text-center'>Sign up</h1>
            <p class='mb-6 text-center text-muted'>Be Slang Stan's User</p>

            <form class='mb-6'>
              <div class='name'>
                <label for='name'>Name</label>
                <input
                  type='Name'
                  class='form-control'
                  id='name'
                  placeholder='e.g. mike lee'
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
                />
              </div>
              <p></p>

              <div class='form-check'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  value=''
                  id='creator_group'
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
                  placeholder='name@address.com'
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
                />
              </div>

              {/* <!-- Submit --> */}
              <button class='btn btn-block btn-primary' type='submit'>
                Sign up
              </button>
            </form>

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
