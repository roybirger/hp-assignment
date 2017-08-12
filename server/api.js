

var fs = require('fs');

module.exports = function (app) {

    var users = [];
    var books = [];
    
    var isInitUsers = false;
    var isInitBooks = false;

    initUsers = () => {
        isInitUsers = true;
        var result = JSON.parse(fs.readFileSync(__dirname + '/dat/users.json', 'utf8'));
        users = result.users;
    }    

    initBooks = () => {
        isInitBooks = true;
        var result = JSON.parse(fs.readFileSync(__dirname + '/dat/books.json', 'utf8'));
        books = result.books;
    }   
    
    getUser = (id) => {

        var user = Object.assign({}, users.find((user) => {return user.id === parseInt(id)}));

        if (user) {

            if (user.books) {
            
                if (!isInitBooks) this.initBooks();

                var response = books.filter((book) => { return typeof (user.books.find((userBook) => {return userBook === book.id})) !== 'undefined' })

                user.books = response;
            }

            return user;
        }

        return false;
    }

    app.get('/api/users', function (req, res) {
        
        if (!isInitUsers) this.initUsers();            

        res.json({users: users, totalUsers: users.length });
    });

    app.post('/api/user_return', function(req ,res) {
        
        if (!isInitUsers) this.initUsers();

        var user = users.find((user) => {return user.id === parseInt(req.body.data.userId)});

        user.books = user.books.filter((id) => { return id !== req.body.data.bookId });

        res.json({success : "Updated Successfully", status : 200, user: this.getUser(req.body.data.userId)});
    })

    app.post('/api/user/add', function(req,res) {

        if (!isInitUsers) this.initUsers();

        var user = {
            id: users.length,
            name: req.body.user.name
        }

        users.push(user);

        res.json({success : "Updated Successfully", status : 200});

    });

    app.get('/api/get_user/:user_id', function (req, res) {

        if (!isInitUsers) this.initUsers();
        
            var user = this.getUser(req.params.user_id);

            if (user) {
                res.json({status: 200, success: true, user: user});
            } else {
                res.json({status: 200, success: false});
            }       

    });


}
