import React, { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashBoard/AdminDashboard'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper, Button } from '@mui/material'
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllPosts = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('http://localhost:5000/api/post')
            setItems(res.data);

        }
        getPost();

    }, []);



    const Delete = async (id, index) => {
        const token = localStorage.getItem("profile")
        try {
            await axios.delete(`http://localhost:5000/api/post/${id}`,
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
            setItems((items) => items.filter((_, i) => i !== index));
        } catch (error) {
            console.log(error);
        }

    }

    const Edit = (id) => {

    }





    return (

        
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div >
                <AdminDashboard />
            </div>

            <div style={{ margin: '1%', width: '100%' }}>

                <TableContainer component={Paper}>
                    <Table aria-label='All Posts' >
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Post Title</TableCell>
                                <TableCell>Created Date</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>

                        {items.map((item, index) =>
                            <TableBody key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <TableCell>{item._id}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.createdAt}</TableCell>

                                <TableCell>
                                    <Link style={{ textDecoration: 'none' }} to={`/update/${item._id}`}>
                                        <Button variant="outlined" color="success"> Edit </Button>
                                    </Link>

                                    <Button onClick={() => { Delete(item._id, index) }} sx={{ marginLeft: '2px' }} variant="outlined" color="error"> Delete </Button>
                                </TableCell>

                            </TableBody>
                        )}



                    </Table>
                </TableContainer>

            </div>
        </div>
    )
}

export default AllPosts