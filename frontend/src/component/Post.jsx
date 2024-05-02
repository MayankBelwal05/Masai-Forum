import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const PostCard = ({ post }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'lightblue', borderRadius: 5 }}>
      <CardHeader
        title={post.title}
        subheader={post.category}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.media[0]} // Assuming the first image URL is used
        alt="Post Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontWeight={600}>
          {post.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://masai-forum-backend-k3vu.onrender.com/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const postData = await response.json();
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Grid container spacing={2}>
      {posts.map(post => (
        <Grid item key={post._id}>
          <PostCard post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
