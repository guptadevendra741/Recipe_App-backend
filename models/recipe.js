const mongoose = require('mongoose')
const RecipeSchema = new mongoose.Schema({
    //models
    recipetitle:{type:String},
    author:{type:String},
    imageUrl:{type:Object},
    ingredients:{type:Array},
    instructions:{type:String},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {timestamps:true})

const Recipe = mongoose.model('Recipe',RecipeSchema);

module.exports= Recipe;