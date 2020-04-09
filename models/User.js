const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const brypt = require('bcrypt');


class Customer {
    constructor(email, password, firstName, lastName, phoneNumber)
    {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }
}

const CustomerSchema = new Schema({
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});

CustomerSchema.pre('save', function (next) {
    const customer = this;

    bcrypt.hash(user.password, 20, (error, hash) =>{
        user.password = hash;
        next()
    })

});

const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;


