const express = require('express')
const artistController = require('../controllers/artist')

const router = express.Router()

router.post('/', artistController.create)

router.get('/', artistController.getAllArtists)

router.get('/:id', artistController.getSpecificArtist)

router.patch('/:id', artistController.updateArtist)

module.exports = router
