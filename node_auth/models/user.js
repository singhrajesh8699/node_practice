
module.exports=()=>{
    var mongoose = require('../dbConnection/db_conn')
    try{
        var Schema = mongoose.Schema;
        var userSchema = new Schema({
            name: String,
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            admin: Boolean,
            location: String,
            created_at: Date,
            updated_at: Date
        });
        return mongoose.model('User', userSchema);
    }catch(err){
        console.log(err)
    }
}