//index.js here : entry point to all the routes

const express=require('express');
const router =express.Router();
const homeController=require('../controllers/home_controller');

//to check whether router is loaded or not
console.log("router loaded");

//accessing function inside home controller
router.get('/',homeController.home);


module.exports=router;