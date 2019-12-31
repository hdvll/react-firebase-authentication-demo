import React from 'react';
import { connect } from 'react-redux';
import { authLoading, logoutUser, loginUser } from '../actions/auth';
import './Header.css';

const Header = ({
  authLoading,
  logoutUser,
  loginUser,
  auth: { user, loading }
}) => {
  const login = provider => {
    authLoading(true);
    loginUser(provider);
  };

  const logout = () => {
    logoutUser();
  };

  return (
    <header>
      <div className='logo'>React/Redux/Router/Firebase auth demo</div>
      {loading ? (
        <div>Loading...</div>
      ) : !user ? (
        <nav>
          <button className='loginBtn' onClick={() => login('google')}>
            Google <i className='fab fa-google'></i>
          </button>
          <button className='loginBtn' onClick={() => login('facebook')}>
            Facebook <i className='fab fa-facebook'></i>
          </button>
        </nav>
      ) : (
        <nav>
          <button className='loginBtn' onClick={logout}>
            Logout <i className='fas fa-sign-out-alt'></i>
          </button>
          <img
            src={user.photoURL}
            alt={user.displayName}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%'
            }}
          />
        </nav>
      )}
    </header>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { authLoading, logoutUser, loginUser })(
  Header
);
