const Post = require('../models').Post;
const Seed = require('../models').Seed;
const Detail = require('../models').Detail;

const constants = require('../constants');

const getAllSeed = (req, res) => {
    Seed.findAll()
    .then(seeds => {
        res.json(seeds)
        // res.status(constants.SUCCESS).json(cities)
        // getting data from db and responding as a API
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

const getSeedById = (req, res) => {
    let sort = 'DESC';
    if(req.query.sorted === 'asc')
        sort = 'ASC';
    
    Seed.findByPk(req.params.id, {
        include: [
            {
                model: Detail,
            },
            {
                model: Post,
                attributes: ['id', 'name', 'img', 'catagory', 'cat_type', 'detailId', 'botan_name', 'common_name',
                'light_requirement', 'planting_soil_temp', 'plant_depth', 'plant_spacing', 'plant_type', 'fruit_size',
                'days_to_mature', 'seeds_per_lb'],            
            }
        ],
        order: [
            [{model: Post}, 'cat_type', sort]
        ]
    })
    .then(foundSeed => {
        if(foundSeed === null){
            res.status(constants.BAD_REQUEST).send('ERROR: Incorrect Seed Id')
        }else{
            res.status(constants.SUCCESS).json(foundSeed)
        }
    })
    .catch(err => {
        res.status(constants.INTERNAL_SERVER_ERROR).send(`ERROR: ${err}`);
    })
}

module.exports = {
    getAllSeed,
    getSeedById
}