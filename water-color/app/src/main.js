//References: https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container
//http://jsfiddle.net/8gDLV/1/


$(document).ready(function () {
    $(".location").click(function() {
        // checks location active class, adds 'active' if not
      if (!$(this).hasClass("active")) {
        $(".location.active").removeClass("active");
        $(this).addClass("active")
        //console.log($(this));

        //Appends img icon given location div id
        let iconFile = getBusinessIcon($(this).attr('id'), business)
        let img = document.createElement("img");
        img.src = iconFile
        img.id = "icon"
        this.appendChild(img)
      } else {
        $(this).empty();
        //Allows only one icon TODO: Test with $(this) to remove class only of clicked
        $(".location.active").removeClass("active");
      }
    });
  });
//Placeholder object until actual db

var business = {"obc": {
    "name": "Opening Bell Coffee",
    "icon": "./img/OBCLogo.gif"}
}
  
 function getBusinessIcon(bizId, source){
    let iconFileLocation = source[bizId].icon
    return iconFileLocation
  }
  
