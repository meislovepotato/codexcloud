"use client";

import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import { BoxStyled } from "./styles";
import { getAllPosts } from "../../services/postService";

const Newsfeed = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch posts and update state
  const fetchPosts = async () => {
    try {
      const postsData = await getAllPosts();
      setPosts(postsData);
      setError(null);
    } catch (err) {
      setError(err.message || "Failed to fetch posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BoxStyled>
      <CreatePost onPostCreated={fetchPosts}/>
      <Post posts={posts} error={error} onLikeChange={fetchPosts}/>
    </BoxStyled>
  );
};

export default Newsfeed;
