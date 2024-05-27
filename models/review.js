const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Review = new Schema(
{
    score: {type: String, required: true},
    comment: {type: String, required: true},
    movieId: {type: Schema.Types.ObjectId, ref: 'movie_id'}
   
    
},
{timestamps: true}
)

module.exports =  mongoose.model('reviews', Review)