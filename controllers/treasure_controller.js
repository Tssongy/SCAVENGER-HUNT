const express = require('express')
const Treasure = require('../models/treasure')

const router = express.Router()

router.get('/', (req, res) => {
    Treasure
        .findAll()
        .then(treasures => res.json(treasures))
})

router.post('/', (req, res) => {
    if (req.session.userId){
        const name = req.body.name
        const clue = req.body.clue
        const address = req.body.address

        Treasure
            .create(name, clue, address)
            .then(treasure => res.json(treasure))  
    }
    else {
        res.status(422).json({ message: 'not logged in'})
    }
})

router.delete('/:id', (req, res) => {
    const treasureId = req.params.id

    Treasure
        .delete(treasureId)
        .then(() => res.json({message: 'deleted successfully'}))
})

module.exports = router