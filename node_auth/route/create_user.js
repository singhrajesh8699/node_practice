var User = require('../models/user')()

module.exports.user=(req,res)=>{
    console.log("@@@@@@@@@@@",req.body)
    var data={
        name: req.body.name,
        username: req.body.username,
        password: req.body.password 
    }
    console.log(data)
    var user1 = new User(data);
    user1.save(function(err) {
        if (err){
            console.log(err)
            res.send("user creation failed")
        };
        console.log('User saved successfully!');
        res.send("User saved successfully!")
    });
}