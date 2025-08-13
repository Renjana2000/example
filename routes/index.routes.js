let express = require('express');
let router = express.Router();
let userRouter = require('./user.routes');
router.get('/',function(req,res,next){
    res.json("app ready");
})
router.use('/user',userRouter);

module.exports=router;
