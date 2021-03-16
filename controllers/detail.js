const Seed = require('../models').Seed;
const Detail = require('../models').Detail;
const Post = require('../models').Post;

const constants = require('../constants');

const getDetail = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    console.log('getting details')
    Detail.findByPk(req.params.id, {
        
        // include: [

            // {
                // model: Post,
                // attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
                //  'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
                //   'days_to_mature', 'seeds_per_lb']
            // },
            // {
                // model: Seed,
                // attributes: ['name', 'img', 'catagory', 'cat_type','detailId']
            // }

        // ],
        // attributes: ['id', 'botan_name', 'common_name', 'light_requirement', 'planting_soil_temp', 'plant_depth',
        // 'plant_spacing', 'plant_type', 'fruit_size', 'days_to_mature', 'seeds_per_lb'],
        // order: [
            // [{model: Post}, 'botan_name', sort]
        // ]
    })
    .then(Detail => {
        console.log('found details')
        res.status(constants.SUCCESS).json(Detail)
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const editDetail = (req, res) => {
    Detail.update(req.body, {
        where: {
            id: req.detail.id
        },
        returning: true
    })
    .then(() => {
        Detail.findByPk(req.detail.id, {
            include: [
                {
                    model: Seed,
                    attributes: ['name', 'img', 'catagory', 'cat_type','detailId']
                }
            ],
            attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
            'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
            'days_to_mature', 'seeds_per_lb']
        })
        .then(Detail => {
            res.status(constants.SUCCESS).json(Detail)
        })
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getDetail,
    editDetail
}