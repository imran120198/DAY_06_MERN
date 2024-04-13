import React from "react";

const UserProfile = ({ name, email, bio }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
