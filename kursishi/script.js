let btn =document.querySelector(".toggle");
let icon=document.querySelector(".toggle i");
let body=document.querySelector(".portfolio");

btn.onclick=function(){
  body.classList.toggle("light");
  if(body.classList.contains("light")){
    icon.classList.add("fa-moon");
    icon.classList.add("fa-sun");
  }
  else{
    icon.classList.add("fa-sun");
    icon.classList.add("fa-moon");
  }
}