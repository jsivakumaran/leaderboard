PlayersList = new Mongo.Collection('players');

if (Meteor.isClient){
	Template.leaderboard.events({
		'click': function(){
		  console.log('You clicked something');
		}
	});
	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find()
		},
		'otherHelperFunction': function(){
			return "some other function"
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
