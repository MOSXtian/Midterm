Meteor.methods({

	'registers':function(userprof){
		var userprof = {
			username: userprof.username,
			password: userprof.password,
			email: userprof.email,
			profile:{
				fullname: userprof.fullname,
				genre: userprof.genre,
				gender: userprof.gender,
				updatedAt: new Date()
				}
		}
		Accounts.createUser(userprof);
	},




});
