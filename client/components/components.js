Template.headermain.events({
	'click #rak':function(e){
		e.preventDefault();
 			Meteor.logout(function(err){
 			if(err)
				{
					$.Notify({
		                caption: 'Error',
		                content: 'Registration Failed!',
		                icon: "<span class='mif-vpn-publ'></span>",
		                timeout: 3000,
		                type: 'alert'
		            });


				}else{

					$.Notify({
		                caption: 'Success',
		                content: 'You are now logged out',
		                icon: "<span class='mif-thumbs-up'></span>",
		                timeout: 3000,
		                type: 'info'
		            });
		            $('#bodymain').removeClass().addClass('bg-black');
					}
				});
 			}

});
