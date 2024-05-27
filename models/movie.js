const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Movie = new Schema(
    {
        title: {type: String, required: true},
        runtime: {type: String, required: true},
        rating: {type: String, required: true},
        released: {type: Number, required: true},
        description: {type: String, required: true},
        actor: {type: Schema.Types.ObjectId, ref: 'actor_id'}
    },
    {timestamps: true}
    );
    
    
    
    module.exports = mongoose.model('Movie', Movie)


