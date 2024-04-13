import React from "react";

const EditProfile = ({ name, email, bio }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      <h2>Edit Profile</h2>
      <label>
        Name: <input type="text" defaultValue={name} />
      </label>
      <br />
      <label>
        Email: <input type="email" defaultValue={email} />
      </label>
      <br />
      <label>
        Bio: <textarea defaultValue={bio} />
      </label>
      <br />
    </div>
  );
};

export default EditProfile;
