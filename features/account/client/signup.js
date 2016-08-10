Template.signup.events({
  'click .signup':function(){

    var options={
      email:$('.email').val(),
    password:$('.password').val(),
    roles:'user'
    }
    console.log(options);
     Accounts.createUser(options,function(err){
      if(err){
        console.log(err.reason);
      }
    })
  }
});
