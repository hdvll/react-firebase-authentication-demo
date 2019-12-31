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
            Google <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M457.6 224l-2.1-8.9H262V297h115.6c-12 57-67.7 87-113.2 87-33.1 0-68-13.9-91.1-36.3-23.7-23-38.8-56.9-38.8-91.8 0-34.5 15.5-69 38.1-91.7 22.5-22.6 56.6-35.4 90.5-35.4 38.8 0 66.6 20.6 77 30l58.2-57.9c-17.1-15-64-52.8-137.1-52.8-56.4 0-110.5 21.6-150 61C72.2 147.9 52 204 52 256s19.1 105.4 56.9 144.5c40.4 41.7 97.6 63.5 156.5 63.5 53.6 0 104.4-21 140.6-59.1 35.6-37.5 54-89.4 54-143.8 0-22.9-2.3-36.5-2.4-37.1z"/></svg>
          </button>
          <button className='loginBtn' onClick={() => login('facebook')}>
            Facebook <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z"/></svg>
          </button>
        </nav>
      ) : (
        <nav>
          <button className='loginBtn' onClick={logout}>
            Logout <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M417 80H137c-25.4 0-46 20.6-46 46 0 7.7 6.3 14 14 14s14-6.3 14-14c0-9.9 8.1-18 18-18h280c9.9 0 18 8.1 18 18v260c0 9.9-8.1 18-18 18H137c-9.9 0-18-8.1-18-18 0-7.7-6.3-14-14-14s-14 6.3-14 14c0 25.4 20.6 46 46 46h280c25.4 0 46-20.6 46-46V126c0-25.4-20.6-46-46-46z"/><path d="M224 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.6-84.4c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H63c-7.7 0-14 6.3-14 14s6.3 14 14 14h224.6L224 334.2z"/></svg>
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
