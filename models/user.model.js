import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    passwordHash:{
        type: String
    },
    verified:{
        type: Boolean,
        default: false
    },
    projects:[
        { type: Schema.Types.ObjectId ,ref: 'project' }
    ]
}, { timestamps: true });

const User = model('user', userSchema);

export default User;
