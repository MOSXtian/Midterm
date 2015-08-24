
Template.login.events({
	'submit .login-form':function(e,t){
		e.preventDefault();

		
		var username= t.find('.login-user').value;
		var password= t.find('.login-password').value;
		

		Meteor.loginWithPassword(username,password, function(error){
			if(error)
			{
				console.log("ewq")
				$.Notify({
		                caption: 'Error',
		                content: 'Log-in Failed!',
		                icon: "<span class='mif-warning'></span>",
		                timeout: 3000,
		                type: 'alert'
		            })
			}else{
				console.log("success")
				$.Notify({
		                caption: 'Success',
		                content: 'You are now logged in!',
		                icon: "<span class='mif-user'></span>",
		                timeout: 3000,
		                type: 'info'
		            });
				Session.set('bodym', 'mainbody');
		
				$('#bodymain').removeClass().addClass(Session.get('bodym'));
			}
		});
	}

});
