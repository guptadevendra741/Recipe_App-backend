const router = require("express").Router()
const recipe = require("../models/recipe")

router.get("/search/:id", async(req,res)=>{
    try {
        const recipeList = await recipe.findOne({userId:(req.params.id).toUpperCase()})
        if(!recipeList){
            return res.status(400).json({
                status:"failed",
                message:"Id not found"
            })
        }

        res.status(200).json({
            status:"success",
            recipeList
        })
    } catch (error) {
        res.json({
            status:"success",
            message:error.message
        })
    }
})

module.exports = router