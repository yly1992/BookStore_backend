var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre:{
        type : String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    pages:{
        type: String,
    },
    image_url:{
        type: String,
    },
    buy_url:{
        type: String,
    },
    create_date:{
        type: Date,
        default: Date.now
    }

});

var Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit){
    Book.find(callback).limit(limit);
}

module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);
}
//add book

module.exports.addBook = function(book,callback){
    Book.create(book, callback);
}
//update book
module.exports.updateBook = function(id,book,options,callback){
    var query = {_id:id};
    var update ={
        title: book.title,
        // questions...!!!!!!!!!
        genre: book.genre,
        description:book.description,
        author:book.author,
        publisher:book.publisher,
        pages:book.pages,
        image_url:book.image_url,
        buy_url:book.buy_url,
        create_date:book.create_date
    }
    Book.findOneAndUpdate(query,update,options,callback);
}
// remove

module.exports.deleteBook = function(id,callback){
    var query ={_id:id};
    Book.remove(query, callback);
}