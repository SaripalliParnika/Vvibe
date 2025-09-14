import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

const Profile = () => {
  const { id } = useParams(); // user ID from URL
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // Fetch user info
    axios.get(`http://localhost:5000/api/auth/user/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err));

    // Fetch user posts
    axios.get(`http://localhost:5000/api/posts/user/${id}`)
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));

    // Check follow status
    axios.get(`http://localhost:5000/api/followers/status/${id}`, {
      headers: { Authorization: localStorage.getItem("token") }
    }).then(res => setIsFollowing(res.data.isFollowing))
      .catch(err => console.log(err));

  }, [id]);

  const handleFollow = () => {
    const api = isFollowing ? "unfollow" : "follow";
    axios.post(`http://localhost:5000/api/followers/${api}/${id}`, {}, {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => setIsFollowing(!isFollowing))
    .catch(err => console.log(err));
  }

  return (
    <div style={{ padding: "20px" }}>
      <div className="card">
        <img src={user.profile_pic || "https://via.placeholder.com/100"} alt="profile" style={{ width: "100px", borderRadius: "50%" }} />
        <h2>{user.username}</h2>
        <p>{user.email}</p>
        <button onClick={handleFollow}>{isFollowing ? "Unfollow" : "Follow"}</button>
      </div>
      <h3>Posts</h3>
      <div>
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Profile;
