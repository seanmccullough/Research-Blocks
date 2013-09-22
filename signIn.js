Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");

function logIn()
{	
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

function openSignUp()
{
	window.open("http://researchblocks.parseapp.com/signUp.html", "_self");
}