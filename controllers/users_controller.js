const User=require('../models/user');

module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title:"Spectrum | User profile"
    })
}

module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Spectrum | Sign Up"
    })
}

module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Spectrum | Sign In"
    })   
}

//get the sign up data
module.exports.create = function(req, res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}
        //console.log(req.body.name);
        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

//create the session 
module.exports.createSession=function(req,res){
  //find the user

  //handle user  found
  User.findOne({email: req.body.email}, function(err, user){
    if(err){console.log('error in finding user in signing up'); return}
  
    if(user){
  //handle password which dont match
        if(user.password!=req.body.password){
            return res.redirect('back');
        }

  //handle session creation
        res.cookie('user_id',user.id);
        return res.redirect('/users/profile');
    }
    else{
  //handle user not found
      return res.redirect('back'); 
        }

});
}