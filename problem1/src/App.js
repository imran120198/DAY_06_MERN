import "./App.css";
import { useState } from "react";
import EditProfile from "./Components/EditProfile";
import UserProfile from "./Components/UserProfile";

function App() {
  const [isEditMode, setIsEditMode] = useState(false);

  const user = {
    name: "Imran Khan",
    email: "test@example.com",
    bio: "Full Stack Web Developer",
  };

  const toggleMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "30%",
        margin: "auto",
        flexDirection: "column",
        border:"1px solid black",
        marginTop:"50px"
      }}
    >
      <button
        onClick={toggleMode}
      >
        {isEditMode ? "View Mode" : "Edit Mode"}
      </button>
      {isEditMode ? <EditProfile {...user} /> : <UserProfile {...user} />}
    </div>
  );
}

export default App;
