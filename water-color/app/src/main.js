//References: https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container
//http://jsfiddle.net/8gDLV/1/


$(document).ready(function () {
    $(".location").click(function() {
      if (!$(this).hasClass(".active")) {
        $(".location.active").removeClass("active");
        $(this).addClass("active")
      //} 

      //if (!$(this).has('img')){
          let iconFile = getBusinessIcon($(this).attr('id'), business)
          //appendChildImage(iconFile)
          let img = document.createElement("img");
          img.src = iconFile
          img.id = "icon"
          this.appendChild(img)
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
  
