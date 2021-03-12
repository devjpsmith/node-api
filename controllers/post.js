const Post = require('../models/post');

const postController = (req, res) => {
    res.json({ 
        posts: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
     });
};

const createPost = (req, res) => {
    const post = new Post(req.body);
    // console.log(`Creating Post: `, req.body);
    post.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        } else {
            res.status(200).json({
                post: result
            })
        }
    } );
};

module.exports = { postController, createPost };