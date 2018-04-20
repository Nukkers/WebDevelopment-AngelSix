// to check the file is working 
//alert("hi");


// var is variable an array of callbacks for when the page is loaded 
var onLoadCallBacks = [];

// this loads the js file only after the page has loaded 
document.addEventListener("DOMContentLoaded", function()
{
    //process anything that should happen once the page has loaded 
    ProcessOnLoad();
});

// helper function to iterate over arrays 
function ForEach(array, callback)
{
    // loop each item 
    for (var i  = 0; i < array.length; i++)
    {
        // pass the item back to the function 
        callback(array[i]);
    }
}


// process any on load events 
function ProcessOnLoad()
{
    
    // call the callback within the array 
    ForEach(onLoadCallBacks, function(item)
    {
        // invoke the callback 
        item();

    });
    
}

// call to add a function to be invoked one the page loads 
function OnLoad(callback)
{
    // add this callback to the list 
    onLoadCallBacks.push(callback);
}

