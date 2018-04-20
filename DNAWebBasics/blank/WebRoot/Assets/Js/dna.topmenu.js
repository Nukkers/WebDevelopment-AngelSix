
onload(function()
{
    // find all elements with a hrf of #topmenu 
    var menuExpanders = document.querySelectorAll(".top-menu-standard2");

    ForEach(menuExpanders, function(item)
    {
        // listen on the click events 
        item.addEventListener("click", function()
        {
            alert("hi");
        });

    });

    // for debugging outputting to the console 
    //console.debug(menuExpanders);
});