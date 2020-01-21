const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {
    async store(req, res){
        const payload = await req.body;
        Users.create(payload);
        return res.json(payload);
    
    },

    // async listAll(req,res) {
    //     const response = await Users.find();   
    //     return res.json(response) 
    // },
    async listAll(req,res) {
        const {page} = req.query;
        const response = await Users.paginate({},{page,limit : 3});   
        return res.json(response) 
    },
    


    async listById(req,res){
        const { id } = req.params;
        const response = await Users.findById(id);
        return res.json(response);
    }
}