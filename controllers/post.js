const postController = (req, res) => {
    res.json({ 
        posts: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
     });
};

module.exports = { postController };