const Recipes = require('../model/Recipe')

module.exports.create = (req,res) => {
    const {user} = req
    const body = req.body
    const recipe = new Recipes(body)
    recipe.user = user._id
    recipe.author = user.username
    recipe.save()
        .then((recipe)=>{
            res.json(recipe)
        })
        .catch((err)=>{
           res.json(err)
        })
    
}

module.exports.showAllRecipes = (req,res) => {
    Recipes.find()
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err)
        })
}
