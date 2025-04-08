import React from 'react';

const Profile = () => {
  const email = localStorage.getItem('userEmail');
  const password = localStorage.getItem('userPassword');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Password:</strong> {password}</p>
    </div>
  );
};

export default Profile;
