const express=require('express')
const router=express.Router()
const usersController=require('../app/controllers/UsersController')
const recipesController=require('../app/controllers/RecipesController')
const authenticateUser=require('../app/middlewares/authentication')

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)

router.post('/recipes',authenticateUser,recipesController.create)
router.get('/allRecipes',recipesController.showAllRecipes)

module.exports=router