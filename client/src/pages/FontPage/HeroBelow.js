import React, { useState, useEffect } from 'react'
import { Stack, Button, Container, Box, Paper, Grid } from '@mui/material';
import Search from '../../components/Search';
import Sidebar from '../../components/Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom'


const HeroBelow = () => {
  const [items, setItems] = useState([]);
  const Categories = ['Home', 'News', 'Story', 'Sports']


  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('http://localhost:5000/api/post')
      setItems(res.data);
    }
    getPost();
  }, []);


  return (
    <Container maxWidth="lg">
      <Grid sx={{ marginTop: '2%', marginBottom: '2%' }} container spacing={5} >
        <Grid item xs={12} sm={8} spacing={5} >
          <h2 style={{ backgroundColor: 'gray', padding: '5px', display: 'inline-block', width: '50%', color: 'white', borderRadius: '5px' }}> Latest Post</h2>

          {items.slice(0, 7).map((item, index) =>

            <Paper key={index} elevation='2' sx={{ marginTop: '1%', padding: '10px' }}>
              <Stack direction='row' spacing={2}>
                <img style={{ width: '200px', height: 'auto', objectFit: 'cover' }} src={item.img} alt="" />
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ margin: '0px 0px 10px 0px', padding: '0' }}>{item.title.slice(0, 30) + '...'}</h3>
                  <h5 style={{ margin: '10px 0px 10px 0px', padding: '0' }}> {item.description.slice(0, 150) + '...'}</h5>
                  
                  <Link style={{ textDecoration: 'none' }} to={`/post/${item._id}`}>
                    <Button size="small" sx={{ width: '25%' }} variant="outlined">Read More</Button>
                  </Link>

                </Box>
              </Stack>
            </Paper>

          )}

        </Grid>


        {/* ........................................SideBar............................................................... */}
        <Grid item xs={12} sm={4} spacing={5} >
          <h2 style={{ backgroundColor: 'gray', padding: '5px', display: 'inline-block', width: '50%', color: 'white', borderRadius: '5px' }}> SideBar</h2>
          <Sidebar />
        </Grid>
      </Grid>


    </Container >
  )
}

export default HeroBelow