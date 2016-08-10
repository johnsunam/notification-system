FlowRouter.route('/',{
  name:"account",
  action(){
    BlazeLayout.render('layout',{notloggeInTemplate:'login',loggedInTemplate:'userdashboard', data:"SignIn"});
  }
});
FlowRouter.route('/signup',{
  name:"account",
  action(){
    BlazeLayout.render('layout',{notloggeInTemplate:'signup',data:"signup"});
  }
})
FlowRouter.route('/description',{
  name:"account",
  action(){
    BlazeLayout.render('layout',{notloggeInTemplate:'login',loggedInTemplate:'description',data:"SignIn"});
  }
});
