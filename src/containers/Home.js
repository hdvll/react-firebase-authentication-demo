import React from 'react';
import { connect } from 'react-redux';
import './Home.css';

export const Home = ({ auth: { user, loading } }) => {
  return (
    <div className='home'>
      <h1>Home</h1>
      {loading ? (
        <div>Loading...</div>
      ) : !user ? (
        <p>Log in to view this page</p>
      ) : (
        <p>User {user.email} is logged in</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Home);
