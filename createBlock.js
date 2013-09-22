

function createBlock()
{	
	Parse.initialize("YvULQpWeWms3tGPYJYeFR37L1YhZus8T7v2joSvz", "X6uoBy1zoOanP51e08f0Cz396TzeqaQk4OVB7Jo2");
	var block = new Parse.Blocks();
	var name = document.getElementById("inputName").value;
	var description = document.getElementById("inputDescription").value;
	
	block.set("name",name);
	block.set("description",description);
	
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
}

/*function openSignUp()
{
	window.open("http://researchblocks.parseapp.com/signUp.html", "_self");
}*/