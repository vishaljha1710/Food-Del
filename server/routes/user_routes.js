const express = require('express');
const router = express.Router();
const user = require('../modals/user');

router.post('/createuser',async (req,res)=>{
    try {
        await user.create({
            name:req.body['name'],
            location:req.body['location'],
            email:req.body['email'],
            password:req.body['password'],
        })
        res.send({status:"success",msg:"succesfully added user"});
    } catch (error) {
        res.send({status:"fail",error});
        console.log(error)
    }
})

module.exports = router;