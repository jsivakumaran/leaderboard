PlayersList = new Mongo.Collection('players');

if (Meteor.isClient){
	Template.leaderboard.events({
		'click .player': function(){
		  var playerId = this._id;
		  Session.set('selectedPlayer', playerId);
		},
		'click .increment': function(){
			var selectedPlayer = Session.get('selectedPlayer');
			PlayersList.update(selectedPlayer, {$inc: {score: 5} });
		}
	});
	Template.leaderboard.helpers({
		'player': function(){
			return PlayersList.find()
		},
		'selectedClass': function(){
			var playerId = this._id;
			var selectedPlayer = Session.get('selectedPlayer');
			if(playerId == selectedPlayer){
			  return "selected"
			}
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
