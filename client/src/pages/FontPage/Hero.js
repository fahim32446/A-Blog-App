import React, { useState, useEffect } from 'react'
import { Button, Container, Box, Paper, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom'


const Hero = () => {
    const [items, setItems] = useState([]);


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('http://localhost:5000/api/post')
            setItems(res.data);
        }
        getPost();
    }, []);


    return (
        <Container >
            <Typography sx={{ marginTop: '10px', padding: '5px', textAlign: 'center', backgroundColor: '#e3e3e3', color: 'black', borderRadius: '5px' }} variant="h5">Featured Post</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Grid container spacing={2}>

                    {items.slice(0, 4).map((item, index) =>



                        <Grid key={index} item xs={12} sm={3}>
                            <Paper elevation='2' sx={{ marginTop: '5%' }}>
                                <img style={{ width: '97%', height: '150px', objectFit: 'cover', padding: '5px', borderRadius: '10px' }} src={item.img} />
                                <div style={{ padding: '5px' }}>
                                    <Typography variant="h5" color="initial">
                                        {item.title.slice(0, 30) + '...'}
                                    </Typography>
                                    <Typography variant="body2" display='inline' color="initial">
                                        {item.description.slice(0, 150) + '...'}
                                    </Typography>
                                </div>
                                <Link style={{textDecoration: 'none'}} to={`/post/${item._id}`}>
                                    <Button size="small" sx={{ padding: '5px', margin: '10px' }} variant="outlined">Read More</Button>
                                </Link>
                            </Paper>
                        </Grid>



                    )}



                </Grid>
            </Box>

        </Container>
    )
}

export default Hero