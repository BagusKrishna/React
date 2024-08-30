// src/pages/UserSettings.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserSettings = () => {
  const { userId } = useParams(); // Mengambil userId dari parameter URL

  return (
    <div>
      <h2>User Settings</h2>
      <p>Settings for user with ID: {userId}</p>
      {/* Tambahkan pengaturan lain sesuai kebutuhan */}
    </div>
  );
};

export default UserSettings;
