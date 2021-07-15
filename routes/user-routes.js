const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addNewFriend,
    deleteFriend
} = require('../controllers/user-controller');

router
    .route('/all')
    .get(getAllUsers)


router
    .route('/')
    .post(createUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:userId/friends/:friendsId')
    .post(addNewFriend)
    .delete(deleteFriend)

module.exports = router;