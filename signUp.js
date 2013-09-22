Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");
function signUp()
{
	if(Parse.User.current())
	{
		alert("someone got here first");
		Parse.User.logOut();
	}
	else
	{
	alert("ready to log in");
	var user = new Parse.User();
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	
	user.set("username",email);
	user.set("password",password);
	user.set("email",email);
	
	user.signUp(null,{
		success: function(user){
		alert("Account created.\n"
			 +"Name: " + user.getUsername()+"\n"
			 +"Password: "+ user.getPassword()+"\n");
		//load up splash page
		},
		error: function(user, error){ 
			alert("Error: " + error.code + " " + error.message);
		} 
		});
	}
	
	return false;
}