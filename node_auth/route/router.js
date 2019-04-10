var createUser = require('./create_user')

module.exports = (express)=>{
    try{
        var router = express.Router()
        
        // define the home page route
        router.get('/', function (req, res) {
            res.send('hello server is working')
        })

        //get-param/12345
        router.get('/get-param/:id',function (req, res) {
            res.send(req.params.id)
        })

        //get-query?id=1234
        router.get('/get-query',function (req, res) {
            res.send(req.query.id)
        })
        
        // define the about route
        router.get('/about', function (req, res) {
            res.send('About birds')
        })

        // router.get('/create-user', function(req, res){
        //     var user = new User({
        //         name: 'Chris',
        //         username: 'sevilayha',
        //         password: 'password' 
        //     });
        //     user.save(function(err) {
        //         if (err) throw err;
        //         console.log('User saved successfully!');
        //     });
        // })

        router.post('/create-user',createUser.user)

        return router
    }
    catch(err){
        console.log(err)
    }
}
  