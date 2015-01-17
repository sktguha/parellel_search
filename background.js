chrome.browserAction.onClicked.addListener(function (tab){
var q=window.prompt("enter common search query to search. keep amazon , ebay, snapdeal ,flipkart tabs open");
mai(q);
});

function mai(q)
{
//amazon.in
chrome.tabs.query({url:"*://www.amazon.in/*"}, function callback(tabs)
    {
    //alert("amazon"+tabs.length);	
    for(var i=0;i<tabs.length;i++)
    {
   chrome.tabs.executeScript(tabs[i].id, {code:"var myst='"+q+"';"}, null);
   chrome.tabs.executeScript(tabs[i].id, {code:"document.querySelector('#twotabsearchtextbox').value=myst; document.querySelector('#nav-searchbar > div.nav-submit-button.nav-sprite > input').click();"});
    //chrome.tabs.executeScript(tabs[i].id, {code:"alert(document.title)"}, null);
    }
	});

chrome.tabs.query({url:"*://www.flipkart.com/*"}, function callback(tabs1)
    {
     //   alert("flipkart"+tabs1.length);
	
	for(var i=0;i<tabs1.length;i++)
    {
    chrome.tabs.executeScript(tabs1[i].id, {code:"var myst='"+q+"';"}, null);
    chrome.tabs.executeScript(tabs1[i].id, {code:"document.querySelector('#fk-top-search-box').value=myst; document.querySelector('#fk-header-search-form > div > div > div.unit.search-bar-submit-wrap.size1of6 > input.search-bar-submit.fk-font-13.fk-font-bold').click();"});
    
     //chrome.tabs.executeScript(tabs[i].id, {code:"alert(document.title)"});
    }
	});

 chrome.tabs.query({url:"*://www.ebay.in/*"}, function callback(tabs1)
    {
     //   alert("flipkart"+tabs1.length);
	
	for(var i=0;i<tabs1.length;i++)
    {
    chrome.tabs.executeScript(tabs1[i].id, {code:"var myst='"+q+"';"}, null);
    chrome.tabs.executeScript(tabs1[i].id, {code:"document.querySelector('#gh-ac').value=myst; document.querySelector('#gh-btn').click()"});
    
     //chrome.tabs.executeScript(tabs[i].id, {code:"alert(document.title)"});
    }
	});
        
   chrome.tabs.query({url:"*://www.snapdeal.com/*"}, function callback(tabs1)
    {
     //   alert("flipkart"+tabs1.length);
	
	for(var i=0;i<tabs1.length;i++)
    {
    chrome.tabs.executeScript(tabs1[i].id, {code:"var myst='"+q+"';"}, null);
    chrome.tabs.executeScript(tabs1[i].id, {code:"document.querySelector('#keyword').value=myst; document.querySelector('#searchBtn').click()"});
    
     //chrome.tabs.executeScript(tabs[i].id, {code:"alert(document.title)"});
    }
	});

}