import { useNavigate } from "react-router-dom";
import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";

function ProfilePage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await apiRequest.post("/auth/logout");


      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || "Failed to log out. Please try again.");
    }
  };

  const handleUpdate = () => {
    navigate("/profile/update");
  };
  

  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button onClick={handleUpdate}>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="/profilePic.jpeg"
                alt="Avatar"
              />
            </span>
            <span>
              Username: <b>Yogendra</b>
            </span>
            <span>
              E-mail: <b>Yogendra@gmail.com</b>
            </span>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
