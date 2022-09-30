import React, { useState, useEffect } from 'react'
import { Container, Paper, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import RecentPost from '../components/RecentPost';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const Post = () => {
    const { id } = useParams();
    const [items, setItems] = useState({ title: '', description: '', category: '', img: '' });

    useEffect(() => {
        if (id) {
            const getPost = async () => {
                const res = await axios.get(`http://localhost:5000/api/post/${id}`)
                setItems(res.data);
            }
            getPost();
        }
    }, [id]);

    console.log(items);

    return (
        <Container maxWidth="lg">
            <Grid sx={{ marginTop: '5%', marginBottom: '5%' }} container spacing={5} >
                <Grid item xs={12} sm={8} spacing={5} >
                    <>
                        <Paper>
                            <h3 style={{ padding: '10px', margin: "5px 0px 5px 0px" }}>{items.title}</h3>
                        </Paper>

                        <Paper sx={{ width: '100%', height: '410px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '5px' }}>

                            <img style={{ width: '99%', height: '400px', objectFit: 'cover', padding: '5px', borderRadius: '10px' }} src={items.img} alt="" />
                        </Paper>

                        <Paper>
                            <h6 style={{ padding: '10px', margin: "5px 0px 5px 0px" }}>Published On: {items.createdAt} &nbsp; Author: fahimAz</h6>
                        </Paper>

                        <Paper>
                            <p style={{ padding: '5px' }}>
                                {items.description}
                            </p>

                        </Paper>

                    </>
                </Grid>

                <Grid item xs={12} sm={4} spacing={5} >
                    <Sidebar />

                    <div style={{ marginTop: '10px' }}>
                        <RecentPost />
                        <RecentPost />
                    </div>
                </Grid>
            </Grid>


        </Container>
    )
}

export default Post