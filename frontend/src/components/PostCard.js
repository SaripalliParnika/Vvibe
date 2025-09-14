import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="card">
      <img src={post.image_url} alt="post" style={{ width: "100%", borderRadius: "10px" }} />
      <p>{post.caption}</p>
    </div>
  );
};

export default PostCard;
