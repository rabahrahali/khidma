/*hello world*/

window.onscroll = function (){
  if ( document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 1000){
    document.body.style.backgroundColor="black";
    document.body.style.transition="all 0.5s";
  }
if ( document.documentElement.scrollTop > 1000 && document.documentElement.scrollTop < 1500){
  document.body.style.backgroundColor="blue";
  document.body.style.transition="all 0.5s";
}
if ( document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 2000){
  document.body.style.backgroundColor="green";
  document.body.style.transition="all 0.5s";
}
if ( document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 2500){
  document.body.style.backgroundColor="red";
  document.body.style.transition="all 0.5s";
}
}


