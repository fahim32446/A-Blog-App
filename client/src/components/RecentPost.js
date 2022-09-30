import React from 'react'
import { Card ,CardActionArea, CardActions, CardContent , CardMedia, Button, Typography   } from '@mui/material';

const RecentPost = () => {
  return (
    <Card sx={{ maxWidth: "100%", marginTop:'10px' }}>
      <CardActionArea >

    <CardMedia
      component="img"
      height="160"
      image="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    />
    <CardContent>
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, veniam!
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque iste explicabo delectus dolorum? Deserunt consequatur, similique praesentium nihil unde quaerat!
      </p>
    </CardContent>
    <CardActions>
      <Button variant="outlined" size="small">Read More</Button>
    </CardActions>
    </CardActionArea>

  </Card>
  )
}

export default RecentPost