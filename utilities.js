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

function logOut()
{
	if(Parse.User.current())
		Parse.User.logOut();
	setUserName();
	window.open("signIn.html","_self");
}