import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./profileUpdatePage.scss";

function ProfileUpdatePage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        console.log(userId);
        
        const res = await apiRequest.put("/auth/update", {
            id: userId,  
            ...formData,
        });


        
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Profile updated successfully!");
        navigate("/profile");
    } catch (err) {
        console.error("Update Error:", err);
        setError(err?.response?.data?.message || "Failed to update profile");
    } finally {
        setIsLoading(false);
    }
};

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>

          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="item">
            <label htmlFor="password">Password (Leave empty to keep old password)</label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update"}
          </button>

          {error && <span className="error">{error}</span>}
        </form>
      </div>
    </div>
  );
}

export default ProfileUpdatePage;
