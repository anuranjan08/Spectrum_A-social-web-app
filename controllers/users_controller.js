module.exports.profile=function(req,res){
    return res.end('<h1> User Profile </h1>')
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
module.exports.create=function(req,res){
    ///
}
//create the session 
module.exports.createSession=function(req,res){

}

