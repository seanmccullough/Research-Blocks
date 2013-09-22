Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");

function logOut()
{
	if(Parse.User.current())
		Parse.User.logOut();
	setUserName();
	//window.open("//signIn.html","_self");
}

function setUserName()
{
	alert("Setting username");
	var name;
	var currentUser = Parse.User.current();
	if(currentUser)
		name = currentUser.get("username");
	else
		name = "No one is signed in.";
	document.getElementById("loginStatus").innerHTML = name;
}

function createBlockWindow()
{
	cbWindow = window.open("http://researchblocks.parseapp.com/createBlock.html");
	cbWindow.focus();
}

function createBlock()
{	
	alert("going to create block");
	var Blocks = Parse.Object.extend("Blocks");
	var block = new Blocks(); 
	alert("created block");
	var name = document.getElementById("inputName").value;
	var description = document.getElementById("inputDescription").value;
	var owner = Parse.User.current().get("username");
	alert("Owner = " + owner);
	
	block.set("name",name);
	block.set("description",description);
	block.set("owner",owner);
	
	block.save(null, {
		success: function() {
		// Execute any logic that should take place after the object is saved.
		alert('New object created with objectId: ' + block.id);
		},
		error: function() {
		// Execute any logic that should take place if the save fails.
		// error is a Parse.Error with an error code and description.
		alert('Failed to create new object, with error code: ' + error.description);
		}
	});
	
	return false;
}
