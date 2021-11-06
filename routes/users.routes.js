const { Router } = require('express');
const { getUser, getUsers, putUsers, postUsers, deleteUsers } = require('../controllers/users.controller')
const router = Router();

router.get('/:id', getUser);
router.get('/', getUsers);
router.put('/', putUsers);
router.post('/', postUsers);
router.delete('/', deleteUsers);




module.exports = router;