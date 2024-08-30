// src/pages/UserProfile.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const UserProfile = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <ul>
          <li>
            <Link to="settings/123">User Settings</Link> {/* Example link with a dummy userId */}
          </li>
        </ul>
      </nav>
      <Outlet /> {/* Render nested routes */}
    </div>
  );
};

export default UserProfile;
