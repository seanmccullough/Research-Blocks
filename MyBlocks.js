Parse.initialize("5qbsu1eWpUXnoeb2JnL7ZcxqPXiajZOGsSkyk7fB", "YYOUQ0x2decE180Il4Y5mZGUIzAcWR7VTGsYsZvb");

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

function createTable()
{
	var user = Parse.User.current();
	var blockArray = user.get("Blocks");
	var numElements = 0;
	var tablecontents = "<table>";
	for (block in blockArray)
	{
		alert("Inside for");
		tablecontents += "<tr>";
			tablecontents += "<td>" + block.type + "</td>";
			tablecontents += "<td>" + block.url + "</td>";
		tablecontents += "</tr>";
	}
	tablecontents += "</table>";
	document.getElementById("blockTable").innerHTML = tablecontents;
}

function logOut()
{
	if(Parse.User.current())
		Parse.User.logOut();
	setUserName();
	window.open("http://researchblocks.parseapp.com/signIn.html","_self");
}