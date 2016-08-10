Template.admindashboard.events({
  'click .notify':function(){
    var date=$('.date').val();
    var d=new Date(moment(date).format('l'));
    console.log($(".titles").val());

    notification.insert({title:$(".titles").val(),description:$('.description').val(),notify_date:d,status:[],createdAt:Date()});
$(".titles").val("");
$('.description').val("")
  }
})
