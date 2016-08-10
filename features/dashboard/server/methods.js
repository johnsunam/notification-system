Meteor.methods({
  getdata:function(){
    var date=new Date();
    var d=new Date(moment(date).format('l'));
    return notification.find({notify_date:{$eq:d}}).fetch();
  },
  updateStatus:function(){
    var date=new Date();
    var d=new Date(moment(date).format('l'));
    var notice=notification.find({notify_date:{$eq:d}}).fetch();
    var present=_.map(notice,function(single){
      var h=_.contains(single.status,Meteor.userId())
      if(!h){
        return single._id;
      }
    });
  notification.update({_id:{$in:present}},{$push:{status:Meteor.userId()}},{multi:true});
  }
})
