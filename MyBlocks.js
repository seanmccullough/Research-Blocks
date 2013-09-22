Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");

function createTable()
{
	var user = Parse.User.current();
	var blockArray = user.get("Blocks");
	var numElements = 0;
	var tablecontents = "<table>";
	for (block in blockArray)
	{
		tablecontents += "<tr>";
			tablecontents += "<td>" + block.type + "</td>";
			tablecontents += "<td>" + block.url + "</td>";
		tablecontents += "</tr>";
	}
	tablecontents += "</table>";
	document.getElementById("blockTable").innerHTML = tablecontents;
}
