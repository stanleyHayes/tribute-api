const express = require("express");
const {authenticate} = require("../../../middleware/v1/user/authenticate");
const {createAdmin, deleteAdmin, getAdmin, getAdmins, updateAdmin} = require("../../../controllers/v1/admin/admins");

const router = express.Router({mergeParams: true});

router.route('/').post(authenticate, createAdmin).get(authenticate, getAdmins);

router.route('/:id').get(authenticate, getAdmin).put(authenticate, updateAdmin)
    .delete(authenticate, deleteAdmin);

module.exports = router;
