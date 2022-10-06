const express = require("express");
const {authenticate} = require("../../../middleware/v1/admin/authenticate");
const {createUser, deleteUser, getUser, getUsers, updateUser} = require("../../../controllers/v1/admin/users");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createUser).get(authenticate, getUsers);

router.route('/:id')
    .get(authenticate, getUser)
    .put(authenticate, updateUser)
    .delete(authenticate, deleteUser);

module.exports = router;
