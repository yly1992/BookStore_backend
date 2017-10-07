var mongoose = require('mongoose');

// genre schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_date:{
        type:Date,
        default: Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);
// get genre
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}
//add genre
module.exports.addGenres = function(genre,callback){
    Genre.create(genre, callback);
}

// update genre
module.exports.updateGenres = function(id,genre,options,callback){
    var query = {_id:id};
    var update ={
        name: genre.name
    }
    Genre.findOneAndUpdate(query,update,options,callback);
}
// remove

module.exports.deleteGenre = function(id,callback){
    var query ={_id:id};
    Genre.remove(query, callback);
}