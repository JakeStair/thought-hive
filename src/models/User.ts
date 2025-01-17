import mongoose, { Schema, Types, type Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts: mongoose.Schema.Types.ObjectId[];
    friends: Types.ObjectId[];
    friendCount: number;
}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought',
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
});

userSchema.virtual('friendCount').get(function(this: IUser) {
    return this.friends.length;
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;