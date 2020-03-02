const {Schema, model} = require('mongoose');


let UserValidator = Schema({
    login: String
    , password: String
    , description: {
        name: String
        , photo: String
        , Count: String
        , friend: Array
        , status: String

    }

});

const User = model('User', UserValidator)
module.exports = User;




