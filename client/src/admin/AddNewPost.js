import React, { useState, useEffect } from 'react'
import AdminDashboard from './AdminDashBoard/AdminDashboard'
import { TextField, Button, Autocomplete } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './firebase'


const AddNewPost = () => {
    const { id } = useParams();
    const Categories = ['Home', 'News', 'Story', 'Sports']
    const [post, setPost] = useState({ title: '', description: '', category: '', img: '' });
    const [file, setFile] = useState(null);



    useEffect(() => {
        if (id) {
            const getPost = async () => {
                const res = await axios.get(`http://localhost:5000/api/post/${id}`)
                setPost(res.data);
            }
            getPost();
        }
    }, [id]);


    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const imageUpload = (e) => {
        setFile(e.target.files[0])
        const filename = new Date().getTime() + file.name;
        const storage = getStorage(app);
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                }
            },
            (error) => {
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const newPost = { ...post, img: downloadURL };
                    setPost(newPost);
                });
            }
        );
    }

 
    console.log(post);


    const handlePublished = async (id) => {
        const token = localStorage.getItem("profile")

        if (id) {
            await axios.put(`http://localhost:5000/api/post/${id}`, post, { headers: { "Authorization": `Bearer ${token}` } })

        } else {
            await axios.post('http://localhost:5000/api/post', post, { headers: { "Authorization": `Bearer ${token}` } })
        }
    }


    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>

            <div >
                <AdminDashboard />

            </div>

            <div style={{ margin: '3%', width: '100%' }}>

                <TextField
                    name="title" id="outlined-basic" fullWidth={true} label="Add Your Post Title" variant="outlined" value={post.title}
                    onChange={handleChange} />

                <TextField
                    sx={{ marginTop: '20px' }}
                    name="description"
                    id="outlined-multiline-flexible"
                    label="Content Area"
                    multiline
                    rows={10}

                    fullWidth={true}
                    value={post.description}
                    onChange={handleChange}
                />


                <Autocomplete
                    onChange={(event, value) => setPost({ ...post, category: value })}
                    options={Categories}
                    // value={post.category}
                    sx={{ width: 300, marginTop: '20px' }}
                    renderInput={(params) => <TextField {...params} name="category" label="Add Categories"
                    />}
                />

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>


                    <Button sx={{ marginTop: '20px' }} variant="contained" component="label" >
                        Upload Feature Image
                        <input type="file" hidden name="img" onChange={imageUpload} />
                    </Button>

                    <Button sx={{ marginTop: '20px' }} variant="outlined" component="label" onClick={() => handlePublished(id)}>
                        Published Post </Button>
                </div>



            </div>
        </div>
    )
}

export default AddNewPost