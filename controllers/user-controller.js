const { User } = require('../models');

const userController = {

    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    },

    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err))
    },

    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        })
    }, 

    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "no user found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err=> res.json(err))
    }, 

    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: "no user found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    //shows data added but on pull no update stuck
    addNewFriend({ params, body }, res){
        User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err))
    },

    deleteFriend({ params, body }, res){
        // User.findOne({_id: params.userId})
        // .then(dbUserData => {
        //     dbUserData.pull(body.friendsId)
        //     return dbUserData.save()
        // }).then(dbUserData => res.send(dbUserData))
        User.updateOne( {_id: params.userId}, { $pull: {"friends": body.friends}})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err))
    }
}

module.exports = userController;