//References: https://stackoverflow.com/questions/3029422/how-do-i-auto-resize-an-image-to-fit-a-div-container
//http://jsfiddle.net/8gDLV/1/


jQuery(document).ready(function ($) {
    $(".location").click(function() {
        // checks location active class, adds 'active' if not
      if (!$(this).hasClass("active")) {
        //$(".location.active").removeClass("active");
        //$(this).empty();
        $(this).addClass("active")
        //console.log($(this));

        //Appends img icon given location div id
        //let iconFile = getBusinessIcon($(this).attr('id'), business)
        let info = getBusinessInfo($(this).attr('id'), business)
        let img = document.createElement("img");
        img.src = info.icon
        img.id = "icon"
        //img.class = "icon"
        //img.title = info.desc
        this.appendChild(img)
        $(this).tooltipster({
          'theme': 'tooltipster-shadow',
          'distance': 1,
          'animation': 'grow',
          'trackOrigin': false,
          'delay': [200, 500],
          'maxWidth': 200
        })
          .tooltipster('content', info.desc)
          .tooltipster('open')
      } else {
        $(this).empty();
        //Allows only one icon TODO: Test with $(this) to remove class only of clicked
        $(this).removeClass("active");
        $(this).tooltipster('destroy');
      }
    });
  });


//Placeholder object until actual db

var business = {
  "obc": {
    "name": "Opening Bell Coffee",
    "icon": "./img/OpeningBellCoffee.png",
    "desc": "Opening Bell Coffee - Dallas' best acoustic live music venue & coffee bar. Live music most nights."},
  "alamo": {
    "name": "Alamo Drafthouse Cinema",
    "desc": "The Alamo Drafthouse Cinema is an American cinema chain founded in 1997 in Austin, Texas that is famous for its strict policy of requiring its audiences to maintain proper cinemagoing etiquette.",
    "icon": "./img/Alamo.png"},
  "gilleys": {
    "name": "Gilley's - Also known as Southside Ballroom, is a badass venue for music performances and other events.",
    "desc": "",
    "icon": "./img/gilleys.png"},
  "melted": {
    "name": "Melted",
    "desc": "Melted - Best grilled cheese around Dallas. Awesome cocktails too.",
    "icon": "./img/Melted.png"},
  "sandwich_hag": {
    "name": "Sandwich Hag",
    "desc": "Sandwich Hag -  A Vietnamese patio restaurant specializing in Banh Mi sandwiches, coffee, & boba milk teas.",
    "icon": "./img/Sandwich_Hag.png"},
  "south_side_on_lamar": {
    "name": "South Side on Lamar",
    "desc": "Southside on Lamar - A Dallas Landmark located in the historic Sears building, South Side on Lamar offers centrally located luxury lofts for rent.",
    "icon": "./img/South_side_On_Lamar.png"},
  "four_corners": {
    "name": "Four Corners Brewery",
    "desc": "Four Corners Brewery - Where local flavors intersect craft brewing. A giant brew pub with dozens of delicious beers on tap.",
    "icon": "./img/Four_Corners.png"},
  "industry_alley": {
    "name": "Industry Alley",
    "desc": "Industry Alley - Roomy hangout for cocktails that's open late, with a jukebox, pinball, pool tables & a patio. Secretly known for its tiki bar.",
    "icon": "./img/Industry_Alley.png"},
  "full_city_roosters": {
    "name": "Full City Rooster Coffee Roasters",
    "desc": "Full City Rooster carefully selects beans grown in the finest coffee regions throughout the world and provides coffee at its peak flavor and freshness by its commitment to Small Batch Roasting.",
    "icon": "./img/Full_City.png"},
  "lee_harveys": {
    "name": "Lee Harveys",
    "desc": "Lee Harvey's - Burgers & beer in a hip retro bar with picnic bench yard seating, live music & dog-friendly Sundays.",
    "icon": "./img/Leeharveys.png"},
  "poor_davids_pub": {
    "name": "Poor David's Pub",
    "desc": "Poor David's Pub - Low-frills performance space is an intimate fixture for singer/songwriters & other mellow acts.",
    "icon": "./img/Poordavidpub.png"}

}
  //Deprecated
 function getBusinessIcon(bizId, source){
    let iconFileLocation = source[bizId].icon
    return iconFileLocation
  }

//More flexible
  function getBusinessInfo(bizId, source){
    let businessInfo = source[bizId]
    return businessInfo
  }
  
