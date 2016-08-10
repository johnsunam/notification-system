Meteor.publish('getnotification',function(){
  var date=new Date();
  var d=new Date(moment(date).format('l'));
  return notification.find({notify_date:{$eq:d}});
})
