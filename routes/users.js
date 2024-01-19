const userRouter = require('express').Router();

const {
  getUsers, getUser, createUser, updateUser, updateUserAvatar, getCurrentUser,
} = require('../controllers/users');

userRouter.get('/', getUsers);
userRouter.get('/:userId', getUser);
userRouter.post('/', createUser);
userRouter.patch('/me', updateUser);
userRouter.patch('/me/avatar', updateUserAvatar);
userRouter.get('/me', getCurrentUser);

module.exports = userRouter;
