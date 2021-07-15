const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought
} = require('../controllers/thought-controller');

router 
    .route('/all')
    .get(getAllThoughts)

router
    .route('/create')
    .post(createThought)

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)
module.exports = router;