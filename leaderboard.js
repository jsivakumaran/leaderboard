PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
	Template.leaderboard.helpers({
		'player': function(){
			return "some other text"
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
