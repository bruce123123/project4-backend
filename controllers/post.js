const Post = require('../models').Post;
const Seed = require('../models').Seed;
const Detail = require('../models').Detail;

const constants = require('../constants');

const getAllPosts = (req, res) => {
    Post.findAll({
        attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
        'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
        'days_to_mature', 'seeds_per_lb'],
        include: [
            {
                model: Seed
            }
        ]
    })
    .then(allPosts => {
        res.status(constants.SUCCESS).json(allPosts)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPostById = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        if(foundPost === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            res.status(constants.SUCCESS).json(foundPost)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const createPost = (req, res) => {
    req.body.seedId = req.seed.id;
    req.body.postId = req.params.post
    Post.create(req.body)
    .then(newPost => {
        res.status(constants.SUCCESS).json(newPost)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getPostsByCatType = (req, res) => {
    Post.findAll({
        where: {
            postId: req.params.catType
        },
        attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
        'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
        'days_to_mature', 'seeds_per_lb'],
    })
    .then(allPosts => {
        if(allPosts.length > 0){
            res.status(constants.SUCCESS).json(allPosts);
        }else{
            res.status(constants.BAD_REQUEST).send(`ERROR: Incorrect Catagory Type`);
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}
const editPost = (req, res) => {
    Post.update(req.body, {
        where: {
            id: req.params.postId
        },
        returning: true
    })
    .then(updatedPost => {
        if(updatedPost[0] === 0){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
        }else{
            Post.findByPk(req.params.postId, {
                include: [
                    {
                        model: Seed,
                        attributes: ['name', 'img', 'catagory', 'cat_type','detailId']
                    },
                    {
                        model: Detail,
                        attributes: ['id', 'botan_name', 'common_name', 'light_requirement', 'planting_soil_temp', 'plant_depth',
                        'plant_spacing', 'plant_type', 'fruit_size', 'days_to_mature', 'seeds_per_lb']
                    }
                ]
            })
            .then(foundPost => {
                if(foundPost === null){
                    res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Post Id')
                }else{
                    res.status(constants.SUCCESS).json(foundPost)
                }
            })
            .catch(err => {
                res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
            })
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const deletePost = (req, res) => {
    Post.findByPk(req.params.postId)
    .then(foundPost => {
        if(foundPost.postId === req.post.id){
            Post.destroy({
                where: {id: req.params.postId}
            })
            .then(() => {
                res.status(constants.SUCCESS).send('success')
            })
        } else {
            res.status(constants.FORBIDDEN).send('ERROR: Post not created by User')
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createPost,
    getAllPosts,
    deletePost,
    editPost,
    getPostById,
    getPostsByCatType
}