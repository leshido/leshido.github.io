var lastMousePos = null;
window.addEventListener("mousemove", function(e){
    if (lastMousePos  == null)
    {
        lastMousePos = e.clientY;
    }
    else {
        var delta = lastMousePos - e.clientY;
        lastMousePos = e.clientY;
        if (e.clientY - delta < 5) {
            // Handle user about to leave
        }
    }
}, true);