const User = require("../models/quiz")

exports.getUser = async(req,res) => {

        try{
            const Users = await User.find({});
            res.status(200)
            .json({
                success:true,
                data:Users,
                message:"Entire User is fetched"
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

exports.getUserById = async(req,res) =>{
    try{
        const id = req.params.id;
        const User = await User.findById({_id: id})

        if(!User){
            return res.status(404).json({
                success:false,
                message:"No Data Found with given id"
            })
        }
        res.status(200).json({
            success:true,
            data:User,
            message: `User ${id} data succesfully fetched`
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