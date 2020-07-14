const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    user : {
        type : Schema.Types.ObjectId
    },
    author : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    ingredients : {
        type : String,
        required : true
    }
})

const Recipes = mongoose.model('Recipe',recipeSchema)

module.exports = Recipes