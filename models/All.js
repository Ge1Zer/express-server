const {Schema, model} = require('mongoose');


let AllValidator = Schema({
    allPeople: Number
});

const All = model('all', AllValidator)
module.exports = All;




