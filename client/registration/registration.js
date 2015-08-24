Template.registration.events({
	'submit .reg-form':function(e,t){
		e.preventDefault();

		var userprof = {
			username: t.find('.user-username').value,
			password: t.find('.user-pass').value,
			email: t.find('.user-email').value,

			fullname: t.find('.user-fullname').value,
			genre: t.find('.user-genre').value,
			gender: t.find('.user-gender').value,

		}

		Meteor.call('registers', userprof, function(err){
		
			if(err)
				{
					$.Notify({
		                caption: 'Error',
		                content: 'Registration Failed!',
		                icon: "<span class='mif-warning'></span>",
		                timeout: 3000,
		                type: 'alert'
		            });

				}else{

					$.Notify({
		                caption: 'Success',
		                content: 'You can now log-in your account!',
		                icon: "<span class='mif-profile'></span>",
		                timeout: 3000,
		                type: 'success'
		            });
					Router.go('index');
					
					console.log("success")
					$('.user-username').val("").select();
					$('.user-pass').val("").select();
					$('.user-email').val("").select();
					$('.user-fullname').val("").select();
					$('.user-genre').val("Grindcore").select();
					$('.user-gender').val("Male").select();
					$('.user-username').val("").select().focus();
			
				}

			});
	}
});
