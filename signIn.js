Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");

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

function logIn()
{
	if(Parse.User.current())
	{
		alert("Already logged in.");
		return;
	}
		
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	
	Parse.User.logIn(email, password, {
		success: function(user){
		alert("Signed in successfully.");
		//load up splash page
		},
		error: function(user, error){
		alert("Error: "+ error.code + " "+ error.message);
		}
	});
}