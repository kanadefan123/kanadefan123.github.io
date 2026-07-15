const homebtn=document.querySelector("#homebtn");
const erasbtn=document.querySelector("#erasbtn");
const compbtn=document.querySelector("#compbtn");
const tracksbtn=document.querySelector("#tracksbtn");
const beginbtn=document.querySelector("#beginbtn");
const eraspage=document.querySelector("#eraspage"); 
const comppage=document.querySelector("#comppage");
const trackspage=document.querySelector("#trackspage");
const homepage=document.querySelector("#homepage");


function hideall(){ 
    eraspage.style.display="none"; //hides era page
    comppage.style.display="none"; //hides comp page
    trackspage.style.display="none"; //hides track page
    homepage.style.display="none"; //hides home page
}

homebtn.addEventListener("click",function() {
    hideall(); // hides all first
    homepage.style.display="block"; // shows only home page
});
//when clicked shows eras page
beginbtn.addEventListener("click", function(){
    hideall();
    eraspage.style.display="block"; 
});
//unhides era page
erasbtn.addEventListener("click", function () {
    hideall(); 
    eraspage.style.display="block";
});
compbtn.addEventListener("click", function () {
    hideall(); 
    comppage.style.display="block";
});
tracksbtn.addEventListener("click", function () {
    hideall();
    trackspage.style.display="block";
});
    hideall();
    homepage.style.display = "block"; //hides all the other pages and shows home page first when the site loads

const baroque = document.querySelector("#baroque");
const classical = document.querySelector("#classical");
const romantic = document.querySelector("#romantic");
const modern = document.querySelector("#modern");

const baroquecontent=document.querySelector("#baroquecontent")
const classicalcontent=document.querySelector("#classicalcontent")
const romanticcontent=document.querySelector("#romanticcontent")
const moderncontent=document.querySelector("#moderncontent")
function hideEra(){ 
    baroquecontent.style.display="none";
    classicalcontent.style.display="none"; 
    romanticcontent.style.display="none";
    moderncontent.style.display="none"; 
}

baroque.addEventListener("click",function() {
    hideEra(); 
    baroquecontent.style.display="block"; 
});

classical.addEventListener("click", function(){
    hideEra();
    classicalcontent.style.display="block"; 
});

romantic.addEventListener("click", function () {
    hideEra(); 
    romanticcontent.style.display="block";
});
modern.addEventListener("click", function () {
    hideEra(); 
    moderncontent.style.display="block";
});
    hideEra();
baroquecontent.style.display = "block";

