import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

const FeaturedPost = () => {
 
  return (
    <Card>
      <CardContent >
        <Typography gutterBottom style={{fontSize:"40px"}} >
          Title of a longer featured blog post
        </Typography>
        <Typography variant="h6">
          Multiple lines of text that form the lede, informing new readers
          quickly and efficiently about what's most interesting in this post's
          contents.
        </Typography>
      </CardContent>
      <CardActions>
        <Button>
          Continue Reading...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FeaturedPost;
