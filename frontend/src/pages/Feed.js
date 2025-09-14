import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import StoryCard from "../components/StoryCard";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch posts
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));

    // Fetch stories
    axios.get("http://localhost:5000/api/stories")
      .then(res => setStories(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div>
        {stories.map(story => <StoryCard key={story._id} story={story} />)}
      </div>
      <div>
        {posts.map(post => <PostCard key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Feed;
