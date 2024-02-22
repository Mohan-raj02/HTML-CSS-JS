// select overlay
// select container

// show popup
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".container")
var showpopup=document.getElementById("show-popup")

showpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// close popup
var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".container")
var closepopup=document.getElementById("close-popup")

closepopup.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var frontendmonitor=document.getElementById("frontend-monitor")
var twitter = document.getElementById("twitter");
var github = document.getElementById("github");
var linkedin = document.getElementById("linkedin");
var instagram = document.getElementById("instagram");

frontendmonitor.addEventListener("click",function(){
    alert("link is not yet updated!")
})
twitter.addEventListener("click",function(){
    alert("link is not yet updated!")
})
github.addEventListener("click",function(){
    window.location.href="https://github.com/Mohan-raj02";
})
linkedin.addEventListener("click",function(){
    window.location.href="https://www.linkedin.com/in/mohanraj03/";
})
instagram.addEventListener("click",function(){
    window.location.href="https://www.instagram.com/.mohan.17.?igsh=dndpeW9sZTFhMmxt";
})
