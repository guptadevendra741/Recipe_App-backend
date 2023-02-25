const Recipe = require("../models/recipe");
const router = require("express").Router();
//route to post recipes
router.post('/recipes',async (req,res)=>{
    const {recipetitle, ingredients, instructions, imageUrl, author} = req.body;
    
    const recipe = new Recipe({recipetitle, ingredients, instructions, imageUrl, author});
    await recipe.save();
    res.status(200).json({
        status:"success",
        recipe
    })
    });
    
    
    
    
    
//route to get recipe
router.get('/getrecipes', async(req,res)=>{
        const recipes = await Recipe.find();
        res.status(200).json({
            status:"success",
            recipes
        })
    });

module.exports=router;