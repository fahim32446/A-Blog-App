import express from "express";
import Post from "../model/Post.js";
import auth from "./verify.js";

const router = express.Router();


//create
router.post('/', auth, async (req, res) => {
    const newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    } catch (error) {
        console.log(error);
    }
})



//update
router.put('/:id', auth, async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedPost);

    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }

})



//Read
router.get(`/post/:id`,  async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);

    } catch (error) {
        res.status(500).json(error)
    }
})



//Delete
router.delete('/:id', auth, async (req, res) => {
    try {

        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

//Get Post

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const getPost = await Post.findById({ _id: id });
        res.status(200).json(getPost);
    } catch (error) {
        console.log(error);
    }

})




//Get Posts
router.get('/',  async (req, res) => {

    const search = req.query.search;
    const qCategory = req.query.category;


    try {
        let getPost;

        if (search) {
            const searchQuery = new RegExp(search)

            getPost = await Post.find({ $or: [{ title: searchQuery }, { description: searchQuery }] });


        } else if (qCategory) {

            getPost = await Post.find({
                category: {
                    $in: [qCategory]
                }
            });
        } else {
            getPost = await Post.find().sort({ _id: -1 });
        }

        res.status(200).json(getPost);

    } catch (error) {
        res.status(500).json(error)
    }
})






export default router;