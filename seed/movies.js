const db =require('../db');
const Actor = require('../models/actor');
const Movie = require('../models/movie')

db.on('error', console.error.bind(console, 'MongoDB connection error'))
const main = async () => {
    const ElizabethMoss = await Actor.find({name: 'Elizabeth Moss'});
    const ChadwickBoseman = await Actor.find({name:'Chadwick Boseman'});
    const EmmaStone = await Actor.find({name: 'Emma Stone'});
    const SandraOh = await Actor.find({name: 'Sandra Oh'});
    const CillianMurphy = await Actor.find({name: 'Cillian Murphy'});
    
    const movies = [
       {
        title: 'The Invisible Man',
        runtime: '124 min',
        rating: 'R',
        released: 2020,
        description: `When Cecilia's abusive ex takes his own life and leaves her his fortune, she suspects his death was a hoax. As a series of coincidences turn lethal, ...` ,
        movieId: ElizabethMoss[0]._id
    },
    {
        title: 'Shirley',
        runtime: '107 min',
        rating: 'R',
        released: 2020,
        description: 'Shirley is a 2020 American biographical drama film directed by Josephine Decker and written by Sarah Gubbins, based on the 2014 novel of the same name by ...',
        movieId: ElizabethMoss[0]._id
    },
    {
        title: 'Black Panther',
        runtime: '135 min',
        rating: 'PG-13',
        released: 2018,
        description: ` After the death of his father, T'Challa returns home to the African nation of Wakanda to take his rightful place as king. When a powerful enemy suddenly reappears, T'Challa's mettle as king -- and as Black Panther',`,
        movieId: ChadwickBoseman[0]._id
    },
    {
        title: '21 Bridges',
        runtime: '99 min',
        rating: 'R',
        released: 2019,
        description: 'An embattled NYPD detective is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy.',
        movieId: ChadwickBoseman[0]._id
    },
    {
        title: 'Easy A',
        runtime: '92 min',
        rating: 'PG-13',
        released: 2010,
        description: `When a lie about Olive's reputation transforms her from anonymous to infamous at her high school, she decides to embrace a provocative...`,
        movieId: EmmaStone[0]._id
        
    },
    {
        title: 'Poor Things',
        runtime: '141 min',
        rating: 'R',
        released: 2023,
        description: `Wildly imaginative and exhilaratingly over the top, Poor Things is a bizarre, brilliant tour de force for director Yorgos Lanthimos and star Emma Stone.`,
        movieId: EmmaStone[0]._id
        
    },
    {
        title: 'Umma',
        runtime: '83 min',
        rating: 'R',
        released: 2022,
        description: `Amanda and her daughter live a quiet life on an American farm, but when the remains of her estranged mother arrive from Korea, Amanda becomes haunted by the ...`,
        movieId: SandraOh[0]._id
        
    },
    {
        title: 'Turning Red',
        runtime: '100 min',
        rating: 'PG',
        released: 2022,
        description: `A thirteen-year-old girl named Mei Lee is torn between staying her mother's dutiful daughter and the changes of adolescence. And as if the challenges were not ...`,
        movieId: SandraOh[0]._id
        
    },
    {
        title: 'Oppenheimer',
        runtime: '180 min',
        rating: 'R',
        released: 2023,
        description: `During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team ...`,
        movieId: CillianMurphy[0]._id
        
    },
    {
        title: 'Oppenheimer',
        runtime: '180 min',
        rating: 'R',
        released: 2023,
        description: `During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team ...`,
        movieId: CillianMurphy[0]._id
        
    },
    {
        title: '28 Days Later',
        runtime: '113 min',
        rating: 'R',
        released: 2002,
        description: `Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.Four weeks after a mysterious, ...`,
        movieId: CillianMurphy[0]._id
        
    }
    ]

    await Movie.insertMany(movies)
    console.log('Created movies!')

}

   


const run = async () => {
    await main()
    db.close()
}

run()