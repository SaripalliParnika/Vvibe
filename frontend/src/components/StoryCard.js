import React from "react";

const StoryCard = ({ story }) => {
  return (
    <div className="story-ring" style={{ display: "inline-block", margin: "5px" }}>
      <img src={story.image_url} alt="story" style={{ width: "60px", height: "60px", borderRadius: "50%" }} />
    </div>
  );
};

export default StoryCard;
