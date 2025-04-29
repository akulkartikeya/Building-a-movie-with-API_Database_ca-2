const mongoose = requrie("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema({
    title:{
        type:String,
        required:true
    },
    
    director:{
        type:String,
        required:true
    },
    
    genre:{
        type:String,
        required:true
    },
    
    releaseYear:{
        type:Number,
    },
    
    avalibleCopies:{
        type:Number,
        required:true
    }
})

