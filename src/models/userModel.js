const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate');
const usersSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    age : Number,
    cpf : String,
    
}, {
    timestamps : true
});

usersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Users',usersSchema);