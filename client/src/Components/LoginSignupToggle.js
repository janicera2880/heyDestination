import React, { useState, useContext } from 'react';
import { UserAdminContext } from '../Contexts/UserAdminContext';
import AdminLogin from './AdminLogin';
import SignupForm from './SignupForm';

/*A function component that toggles between a login and signup form,
 and allows a logged in user to logout. Uses React's state and context hooks to manage state
 form and a signup button or a signup form and a login button. Also renders a logout button if a user is logged in. */
const LoginSignupToggle = () => {
  const { userAdmin} = useContext(UserAdminContext);
  const [toggleForms, setToggleForms] = useState(true);

  if (userAdmin) {
    return (
      <div className="login-user">
        <p>Logged in as {userAdmin.email}</p>
      </div>
    );
  } else {
    return (
      <div className="login-portal">
        {toggleForms ? (
          <>
            <AdminLogin />
            <p>
              Don't have an account? &nbsp;
              <button onClick={() => setToggleForms(false)}>Signup Here</button>
            </p>
          </>
        ) : (
          <>
            <SignupForm />
            <p>
              Already have an account? &nbsp;
              <button onClick={() => setToggleForms(true)}>Click to Login</button>
            </p>
          </>
        )}
      </div>
    );
  }
};

export default LoginSignupToggle;