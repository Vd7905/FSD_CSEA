const User = require("../models/quiz")

exports.deleteUser = async(req,res) => {

        try{
        
            const {id} = req.params;

            await User.findByIdAndDelete(id);
            res.json({
                success:true,
                message:"User Deleted"
            })

        }
       
        catch(err){
            console.log(err);
            res.status(500)
            .json({
                success:false,
                error:err.message,
                message:'server error'
            })
    
        }
}