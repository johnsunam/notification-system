Template.login.events({
  'click .login':function(){
    var email=$('.email').val();
    var password=$('.password').val()
    Meteor.loginWithPassword(email,password,function(err){
      if (!err) {
        console.log("sucessfully logged in");
      }
      else{
        console.log(err.reason);
      }
    })
  }
})
