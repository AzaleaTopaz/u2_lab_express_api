
const db = require('../db')
const Actor = require('../models/actor')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        {
            name: 'Elizabeth Moss',
            age: 41,
            deceased: false,
     
        },
        {
            name: 'Chadwick Boseman',
            age: 43,
            deceased: true,
     
        },
        {
            name: 'Emma Stone',
            age: 35,
            deceased: false,
     
        },
        
       
        {
            name: 'Sandra Oh',
            age: 52,
            deceased: false,
     
        },
      
        {
            name: 'Cillian Murphy',
            age: 48,
            deceased: false,
     
        }
       

    ]
await Actor.insertMany(actors)
console.log('created actors.')

}

const run = async () => {
    await main()
    db.close()
}

run()