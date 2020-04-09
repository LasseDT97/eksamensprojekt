const Customer = require('../../models/User.js');
const path = require('path');

//storeCustomer håndterer user registrations i vores requesthandler i index.js (storeUserController)

module.exports = (req, res) =>{
    Customer.create(req.body, (error, customer) =>{
        if(error){
            return res.redirect('/')
        }

        res.redirect('reservation');
    })
};
