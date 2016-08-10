Accounts.onCreateUser(function(options,user){
 Roles.addUsersToRoles(user._id,options.roles);
 user.roles=options.roles;
 return user;
});
