const mongoose = require('mongoose');

const UserScheme =  new mongoose.Schema(
    {
        name:{
            type: String
        },
        username:{
            type: String
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        phone:{
            type: String
        },
        website:{
            type: String
        },
        image:{
            type: String
        },
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model('users', UserScheme);