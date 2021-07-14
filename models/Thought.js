const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
{
    thoughtText: {
        type: String,
        required: true,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: [
        {
            type:String,
            ref: 'User'
        }
    ],
    reactions: [reactionSchema],
}
)

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;