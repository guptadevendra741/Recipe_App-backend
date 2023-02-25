const mongoose = require('mongoose')
const RecipeSchema = new mongoose.Schema({
    //models
    recipetitle:String,
    author:String,
    imageUrl:String,
    ingredients:String,
    instructions:String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {timestamps:true})

const Recipe = mongoose.model('Recipe',RecipeSchema);

module.exports= Recipe;