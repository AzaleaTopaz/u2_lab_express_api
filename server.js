const express = require('express');
const db = require('./db');
const movieController = require('./controllers/moviecontroller')
const actorController = require('./controllers/actorcontroller')
const reviewController = require('./controllers/reviewController')
const PORT = process.env.PORT || 3002;
const app = express();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))

app.get('/movies', movieController.getAllMovies)

app.get('/actors', actorController.getAllActors)

app.get('/reviews', reviewController.getAllReviews)


app.get('/movies/:id',movieController.getMovieById)

app.get('/actors/:id',actorController.getActorById)

app.get('/reviews/:id',reviewController.getReviewById)

