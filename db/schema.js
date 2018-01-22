const { Schema } = require('mongoose')

const PublicSpaceSchema = new Schema(
    {
        neighborhood: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        hours: {
            type: String,
            required: true
        },
        availability: {
            type: Boolean,
            required: true
        },
        publicOrPrivate: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: {}
    }
)

const PrivateSpaceSchema = new Schema(
    {
        neighborhood: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        hours: {
            type: String,
            required: true
        },
        availability: {
            type: Boolean,
            required: true
        },
        publicOrPrivate: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: {}
    }
)

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true
        },
        email: {
            type: Number,
            required: true
        },
        privateSpaces: [PrivateSpaceSchema]
    },
    {
        timestamps: {}
    }
)

module.exports = {
    UserSchema,
    PrivateSpaceSchema,
    PublicSpaceSchema
}