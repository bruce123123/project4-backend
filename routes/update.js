//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.name =  req.body.name;
        business.img = req.body.name;
        business.catagory = req.body.catagory,
        business.cat_type = req.body.cat_type,
        business.detailId = req.body.detailId,
        business.botan_name = req.body.botan_name,
        business.common_nam = req.body.common_name,
        business.light_requirement = req.body.light_requirement,
        business.planting_soil_temp = req.body.planting_soil_temp,
        business.plant_depth = req.body.plant_depth,
        business.plant_spacing = req.body.plant_spacing,
        business.plant_type = req.body.plant_type,
        business.fruit_size = req.body.fruit_size,
        business.days_to_mature = req.body.days_to_mature,
        business.seeds_per_lb = req.body.seeds_per_lb

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});