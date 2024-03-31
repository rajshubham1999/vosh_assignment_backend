const { default: mongoose } = require('mongoose');
const moongose=require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function(v) {
                
                return /^\d{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit phone number!`
        }
    },

    password:{
        type:String,
        required:true

    }
})

module.exports = mongoose.model("users",userSchema);