import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UploadPost = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      await axios.post("http://localhost:5000/api/posts/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token")
        }
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} required /><br/>
      <input type="text" placeholder="Caption" value={caption} onChange={e => setCaption(e.target.value)} /><br/>
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadPost;
