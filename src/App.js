// src/components/PostList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const addPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        console.log("New post added:", response.data);
        fetchPosts();
        setNotification("Post added successfully!");
        setNewPost({ title: "", body: "" }); // Clear the input fields
        setTimeout(() => setNotification(null), 3000);
      })
      .catch((error) => console.error("Error adding post:", error));
  };

  const updatePost = (postId, updatedPost) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost)
      .then((response) => {
        console.log("Post updated:", response.data);
        fetchPosts();
        setNotification("Post updated successfully!");
        setTimeout(() => setNotification(null), 3000);
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  const deletePost = (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        console.log("Post deleted:", response.data);
        fetchPosts();
        setNotification("Post deleted successfully!");
        setTimeout(() => setNotification(null), 3000);
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div>
      {notification && <div className="notification">{notification}</div>}
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button
              onClick={() => updatePost(post.id, { title: "Updated Title" })}
            >
              Update
            </button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={addPost}>Add Post</button>
    </div>
  );
}

export default App;
