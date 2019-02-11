var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var AssetsSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  note: {
    type: String
  }
});

// This creates our model from the above schema, using mongoose's model method
var Assets = mongoose.model("Assets", AssetsSchema);

// Export the Article model
module.exports = Assets;
