Template.userdashboard.onCreated(function(){
  this.loaded=new ReactiveVar(false);
  this.datas=new ReactiveVar(null);
  this.previous=new ReactiveVar(0);
  this.shownotification=new ReactiveVar(true);
  var self=this;
  Meteor.subscribe('getnotification',function(er){
    self.loaded.set(true);
  });
});
Template.userdashboard.helpers({
  notinum:function(){
    var instance= Template.instance();
    return instance.shownotification.get();
  },
 records:function(){
   var date=new Date();
   var d=new Date(moment(date).format('l'));
  // console.log(notification.find({notify_date:{$eq:d}}).fetch());
    var rec= notification.find({notify_date:{$eq:d}},{sort:{createdAt:-1}}).fetch();
    var arr=new Array();
    _.each(rec,function(single){
      var date=moment(single.createdAt).format('LLLL');
      var r={
        date:date,
        rec:single,
        parentId:single._id+"ID"
      }
      arr.push(r);
    })
    console.log(arr);
    return arr;
 },
 load:function(){
   var instance= Template.instance();
   console.log(instance.loaded.get());
   return instance.loaded.get();
 },
 notify:function(){
   var date=new Date();
   var d=new Date(moment(date).format('l'));
   var present=notification.find({$and:[{notify_date:{$eq:d}},{status:{$elemMatch:{$eq:Meteor.userId()}}}]}).fetch().length;
   var dif= notification.find({notify_date:{$eq:d}}).fetch().length-present;
if(dif!==0){
  return dif;
}
 }
});

Template.userdashboard.events({
  'click .notifications':function(e,tem){
    tem.shownotification.set(false);
    Meteor.call('updateStatus');
  },
  'click .element':function(e,tem){
  var str=e.target.id;
  console.log(str);
  var id=str.substring("ID",str.length-2);
  var ids="#"+id;
  $(ids).slideToggle('slow');
  }
})
