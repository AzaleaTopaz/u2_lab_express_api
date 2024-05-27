const db =require('../db');
const Movie = require('../models/movie');
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const BlackPanther = await Movie.find({title: 'Black Panther'});
    const PoorThings = await Movie.find({title: 'Poor Things'});
    const Umma = await Movie.find({title: 'Umma'});

    const reviews = [
        {
            score: '5/5' ,
            comment: 'After the tragic death of Chadwick, had thought about watching his movies and this one comes to my mind.',
            movieId: BlackPanther[0]._id
           
            
        },
        
        {
            score: '3/5' ,
            comment: 'does is the wiredest marvel movie to me but lets review and I had chance to rewatch it and i think i loved it i guess but lets review good things.',
            movieId: BlackPanther[0]._id
           
            
        },
        {
            score: '3/5' ,
            comment: 'Gorgeous sets and costumes, remarkable performances by Stone, Defoe and a scene-stealing Ruffalo cannot quite save this self-aware oddity of a movie.',
            movieId: PoorThings[0]._id
           
            
        },
        {
            score: '5/5' ,
            comment: 'Funny, Eccentric, Witty',
            movieId: PoorThings[0]._id
           
            
        },

     
        {
            score: '4/5' ,
            comment: 'Understanding this movie is a lot like wearing masks during Covid.  If you have any semblance of intelligence, you will acknowledge that there is value to its existence.',
            movieId: Umma[0]._id
           
            
        },
        {
            score: '5/5' ,
            comment: `loved this movie! Not only did it have my most favorite Grey's character (which automatically meant it would be good) but it was so suspenseful! I was on the edge of my seat (actually bed) the whole time!`,
            movieId: Umma[0]._id
           
            
        }
    ]
    await Review.insertMany(reviews)
    console.log('Created reviews!')

}


const run = async () => {
    await main()
    db.close()
}

run()