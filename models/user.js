// Require mongoose
const mongoose = require('mongoose');

// Require JSON Web Token (used for authentication and passing data between front and back end)
const jwt = require('jsonwebtoken');

// Require joi (used for validating user input)
const Joi = require('joi');

// Require passwerd-complexity (used for validating password complexity)
const passwordComplexity = require('joi-password-complexity');

// Create a schema for the user model
const userSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    email: {type: String, required: true, minlength: 5, maxlength: 255, unique: true},
    password: {type: String, required: true, minlength: 5, maxlength: 1024},
    gender: {type: String, required: true, minlength: 3, maxlength: 20},
    month: {type: String, required: true},
    date: {type: String, required: true},
    year: {type: String, required: true},
    likedSongs: {type: [String], default: []},
    playlists: {type: [String], default: []},
    isAdmin: {type: Boolean, default: false}
});

// Create a method for generating an authentication token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id, name: this.name, isAdmin: this.isAdmin}, 
        process.env.JWT_PRIVATE_KEY, 
        {expiresIn: '7d'}
    );
    return token;
};

// Create a function for validating user
const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(15).required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
        month: Joi.string().required(),
        date: Joi.string().required(),
        gender: Joi.string().valid("male", "female", "non-binary").required()
    });
    return schema.validate(user);
}

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = {User, validate};
