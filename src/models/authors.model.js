const mongoose = require("mongoose");

const authorSchema = new mongoose.schema(
    {
        first_name : { type: String, required:true},
        last_name : { type: String, required: true},
        book : { type: String, required: true}
    },
    {
        versionKey : false,
        timestamps : true,
    }
);