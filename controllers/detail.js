const Seed = require('../models').Seed;
const Detail = require('../models').Detail;
const Post = require('../models').Post;

const constants = require('../constants');

const getDetail = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
    Detail.findByPk(req.detail.id, {
        include: [
            {
                model: Detail,
                attributes: ['id', 'botan_name', 'common_name', 'light_requirement', 'planting_soil_temp', 'plant_depth',
                 'plant_spacing', 'plant_type', 'fruit_size', 'days_to_mature', 'seeds_per_lb']
            },

            {
                model: Post,
                attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
                 'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
                  'days_to_mature', 'seeds_per_lb']
            }
        ],
        attributes: ['id', 'botan_name', 'common_name', 'detailId'],
        order: [
            [{model: Post}, 'botan_name', sort]
        ]
    })
    .then(Detail => {
        res.status(constants.SUCCESS).json(Post)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editPost = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.post.id
        },
        returning: true
    })
    .then(() => {
        User.findByPk(req.post.id, {
            include: [
                {
                    model: Detail,
                    attributes: ['id', 'name', 'state', 'img', 'country']
                }
            ],
            attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
            'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
            'days_to_mature', 'seeds_per_lb']
        })
        .then(userPost => {
            res.status(constants.SUCCESS).json(userPost)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getDetail,
    editPost
}