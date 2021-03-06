var Genre = require('../models/genre');

// Display list of all Genre.
exports.genre_list = function(req, res, next) {
    res.send('NOT IMPLEMENTED: Genre list');
};

exports.genre_list = function(req, res, next) {

   Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genre) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('genre_list', { title:'Genre List', genre_list: list_genre });
    });

};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

exports.genre_create_get = function(req, res, next) {       
    res.render('genre_form', { title: 'Create Genre'});
};


exports.genre_create_post =  function(req, res, next) {        
        

    var genre = new Genre(
                {
                    name: req.name;
                });
            genre.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new genre record.
                res.redirect(genre.url);
            });
        
    };
// Dis

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};