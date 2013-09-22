

Parse.initialize("5qbsu1eWpUXnoeb2JnL7ZcxqPXiajZOGsSkyk7fB", "YYOUQ0x2decE180Il4Y5mZGUIzAcWR7VTGsYsZvb");

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}, {
  success: function(object) {
    alert("yay! it worked");
  }
});

// The "onclick" functions, will do different things depending on the type of item selected

// page selected
function testOnClick(info)
{
	console.log(info.menuItemId + " was clicked");
	console.log("page URL is :  " + info.pageUrl);
	console.log("link URL is :  " + info.linkUrl);
	console.log("text is :  " + info.selectionText);
	console.log("mediaType is :  " + info.mediaType);
	
	if(info.mediaType=="image")
		console.log("This is an image\n\n");
	else
	if(info.selectionText!=undefined)
		console.log("This is a selecion text\n\n");
	else
	if(info.linkUrl!=undefined)
		console.log("This is a link\n\n");
	else
	if(info.pageUrl!=undefined)
		console.log("This is a page\n\n");
}

function inputBlockDetails()
{
	prompt("Block Name: ");
}

// "Create New Block" menu item

var createBlock = chrome.contextMenus.create({"title": "Create New Block","onclick": createBlockWindow,"contexts":["all"],
											   "id": "createBlock"});

// "Add to Block" menu item 
var fillBlock = chrome.contextMenus.create({"title": "Add to Block", "contexts":["all"], "id": "fillBlock_page"});
