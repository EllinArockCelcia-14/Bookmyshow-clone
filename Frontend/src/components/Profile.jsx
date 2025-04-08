import React from 'react';

const Profile = () => {
    // Replace with actual user data
    const user = { name: "John Doe", email: "john@example.com" };

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
        </div>
    );
};

export default Profile;