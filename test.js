
// The "onclick" functions, will do different things depending on the type of item selected

// page selected
function testOnClick_page(info)
{
	alert(info.menuItemId + " was clicked, " + "page");
	
	var tablink
	chrome.tabs.getSelected(null,function(tab) {
    tablink = tab.url;
	});
	
	console.log("URL is :  " + tablink);
}

// link selected
function testOnClick_link(info)
{
	alert(info.menuItemId + " was clicked, " + "link");
	console.log("URL is :  " + info.linkURL);
}

// selection selected
function testOnClick_selection(info)
{
	alert(info.menuItemId + " was clicked, " + "selection");
	console.log("text is :  " + info.selectionText);
}

function inputBlockDetails()
{
	prompt("Block Name: ");
}

function createBlockWindow()
{
	cbWindow = window.open("https://login.yahoo.com/config/login_verify2?&.src=ym&.intl=us");
	cb.focus();
}

// "Create New Block" menu item

var createBlock = chrome.contextMenus.create({"title": "Create New Block","onclick": createBlockWindow,"contexts":["all"],
											   "id": "createBlock"});

// "Add to Block" menu item 
var fillBlock = chrome.contextMenus.create({"title": "Add to Block", "contexts":["all"], "id": "fillBlock_page"});



// Adding test blocks

var testBlock1_page = chrome.contextMenus.create(
  {"title": "Data Structures", "parentId": fillBlock, "onclick": testOnClick_page, "contexts":["page"], "id": "Block1_page"});
 
var testBlock1_link = chrome.contextMenus.create(
  {"title": "Data Structures", "parentId": fillBlock, "onclick": testOnClick_link, "contexts":["link"], "id": "Block1_link"});
  
var testBlock1_selection = chrome.contextMenus.create(
  {"title": "Data Structures", "parentId": fillBlock, "onclick": testOnClick_selection, "contexts":["selection"], "id": "Block1_selection"});



var testBlock2_page = chrome.contextMenus.create(
  {"title": "Algorithms", "parentId": fillBlock, "onclick": testOnClick_page, "contexts":["page"], "id": "Block2_page"});

var testBlock2_link = chrome.contextMenus.create(
  {"title": "Algorithms", "parentId": fillBlock, "onclick": testOnClick_link, "contexts":["link"], "id": "Block2_link"});
  
var testBlock2_selection = chrome.contextMenus.create(
  {"title": "Algorithms", "parentId": fillBlock, "onclick": testOnClick_selection, "contexts":["selection"], "id": "Block2_selection"});
  
//console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);




