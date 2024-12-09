import { useEffect, useState } from "react";
import { getAllPosts } from "@services/postService";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { toggleLike } from "@services/likeService";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await getAllPosts();

        // Add a 'liked' property to each post for initial state
        const updatedPosts = postsData.map((post) => ({
          ...post,
          liked: false, // Assuming all posts are unliked initially
        }));

        setPosts(updatedPosts);
      } catch (err) {
        setError(err);
      }
    };

    getPosts();
  }, []);

  const handleLikeToggle = async (postId) => {
    try {
      const result = await toggleLike(postId); // Call the API to toggle like
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                likeCount: Number(post.likeCount) + (result.liked ? 1 : -1),
                liked: result.liked, // Update 'liked' state based on API response
              }
            : post
        )
      );
    } catch (error) {
      console.error("Error toggling like:", error);
    }
  };

  return (
    <Box style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        All Posts
      </Typography>
      {error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        posts.map((post) => (
          <Card key={post.id} style={{ marginBottom: "16px" }}>
            <CardContent>
              <Typography variant="h6">{post.user.username}</Typography>
              <Typography variant="body1">{post.content}</Typography>
              <Typography variant="caption" color="textSecondary">
                Likes: {post.likeCount}
              </Typography>
              <Button
                variant="text"
                color="primary"
                onClick={() => handleLikeToggle(post.id)}
              >
                {post.liked ? "Unlike" : "Like"}
              </Button>
            </CardContent>
          </Card>
        ))
      )}
      {!posts.length && !error && (
        <Typography>No posts available. Try again later.</Typography>
      )}
    </Box>
  );
};

export default PostList;
