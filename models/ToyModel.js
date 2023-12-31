var mongoose = require('mongoose');
var ToySchema = mongoose.Schema({
   name: String,
   image: String,
   price: String,
   brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'brands'  // 'brands': collection
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'categories'  // 'categorys': collection
   }
});
//Relationship : mobiles (many) - brands (one)

var ToyModel = mongoose.model('toys', ToySchema); // 'mobiles' : collection
module.exports = ToyModel;