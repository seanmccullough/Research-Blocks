function signUp()
{
	var user = new Parse.User();
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	
	user.set("username",email);
	user.set("password",password);
	user.set("email",email);
	
	user.signUp(null,{
		success: function(user){
		alert("Account created.");
		//load up splash page
		},
		error: function(user, error){
		alert("Error: "+ error.code + " "+ error.message);
		}
		});
}