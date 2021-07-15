const router = require('express').Router();

const {
    getAllThoughts,
    createThought
} = require('../controllers/thought-controller');

router 
    .route('/all')
    .get(getAllThoughts)

router
    .route('/create')
    .post(createThought)
    
module.exports = router;