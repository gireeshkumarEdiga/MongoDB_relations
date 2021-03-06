const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        checkin : { type: Number, required: true},
        book_id: {
            type : mongoose.Schema.Types.ObjectId
        }, 
    },
    {
        versionKey : false,
        timestamps : true,
    }
);

module.exports = mongoose.model("user", userSchema);