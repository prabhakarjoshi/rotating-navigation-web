'use strict';

let mainTilter=document.querySelector(".maind");
let navIcon=document.querySelector(".fas");
let retIcon=document.querySelector(".fas1");
let navTilter=document.querySelector("nav");


navIcon.addEventListener("click",function(){

    mainTilter.classList.add("tilt");
    navIcon.style.display="none";
    retIcon.style.display="block";
    mainTilter.classList.add("tilt");
    navTilter.classList.add("tilt");
});



retIcon.addEventListener("click",function(){

    mainTilter.classList.remove("tilt");
    navIcon.style.display="block";
    retIcon.style.display="none";
    navTilter.classList.remove("tilt");
});