Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");

/*
	Print the username of the user currently logged on.
*/
function setUserName()
{
	var name;
	var currentUser = Parse.User.current();
	if(currentUser)
		name = currentUser.get("username");
	else
		name = "No one is signed in.";
	document.getElementById("loginStatus").innerHTML = name;
}

function logIn()
{	
	var email = document.getElementById("inputEmail").value;
	var password = document.getElementById("inputPassword").value;
	
	Parse.User.logIn(email, password, {
		success: function(user){
		alert("Signed in successfully.");
		setUserName();
		//load up splash page
		},
		error: function(user, error){
		alert("Error: "+ error.code + " "+ error.message);
		}
	});
	return false;
}

function logOut()
{
	if(Parse.User.current())
		Parse.User.logOut();
	setUserName();
}

function openSignUp()
{
	window.open("http://researchblocks.parseapp.com/signUp.html", "_self");
}