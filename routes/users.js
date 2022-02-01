const express=require('express');
const router =express.Router();
const usersController=require('../controllers/users_controller');
const postsController=require('../controllers/post_controller');

router.get('/profile',usersController.profile);

router.get('/posts',postsController.posts);

router.get('/sign-up',usersController.signUp);

router.get('/sign-in',usersController.signIn); 

module.exports=router;
