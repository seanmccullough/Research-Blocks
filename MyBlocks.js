Parse.initialize("5qbsu1eWpUXnoeb2JnL7ZcxqPXiajZOGsSkyk7fB", "YYOUQ0x2decE180Il4Y5mZGUIzAcWR7VTGsYsZvb");

function createTable()
{
	alert("Inside createTable()");
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