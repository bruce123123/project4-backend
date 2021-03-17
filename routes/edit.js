// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
  });