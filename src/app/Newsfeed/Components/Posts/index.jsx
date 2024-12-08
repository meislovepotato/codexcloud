import { useEffect, useState } from "react";
import { getAllPosts } from "@services/postService";
import { Card, CardContent, Typography, Box } from "@mui/material";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (err) {
        setError(err); // Capture and display error messages
      }
    };

    getPosts();
  }, []);

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
