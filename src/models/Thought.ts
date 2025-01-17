import mongoose, { Schema, Types, Document } from 'mongoose';

// Reaction subdocument interface
interface IReaction {
    reactionBody: string;
    username: string;
    createdAt: Date;
}

// Thought interface
interface IThought extends Document {
    thoughtText: string;
    createdAt: Date;
    username: string;
    reactions: Types.Array<IReaction>;
    reactionCount: number;
}

// Reaction schema
const reactionSchema = new Schema<IReaction>({
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Thought schema
const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema], // Embed reactionSchema
});

thoughtSchema.virtual('reactionCount').get(function (this: IThought) {
    return this.reactions.length;
});

const Thought = mongoose.model<IThought>('Thought', thoughtSchema);

export default Thought;
