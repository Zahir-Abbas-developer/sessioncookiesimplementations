import React from 'react';
import Cookies from 'js-cookie';

const Dashboard = () => {
  // Get user data from the session cookie
  const userSession = Cookies.get('userSession');
  const userData = userSession ? JSON.parse(userSession) : null;

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <p>Welcome, {userData.username}!</p>
      ) : (
        <p>Please log in to access the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
