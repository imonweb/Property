var btn = document.getElementsByClassName('btn');
var banner = document.getElementById('banner');


btn[0].onclick = function(){
  banner.src = "images/pic1.png";
  anim();
  this.classList.add("active");
}

btn[1].onclick = function(){
  banner.src = "images/pic2.png";
  anim();
  this.classList.add("active");
}

btn[2].onclick = function(){
  banner.src = "images/pic3.png";
  anim();
  this.classList.add("active");
}

function anim(){
  banner.classList.add("zoom");
  setTimeout(function(){
    banner.classList.add("zoom");
  }, 500);

  for(b of btn){
    b.classList.remove("active");
  }
}


// btn[0].addEventListener('click', () => {
//   banner.src = 'images/pic1.png';
// });

// btn[1].addEventListener('click', () => {
//   banner.src = 'images/pic2.png';
// });

// btn[2].addEventListener('click', () => {
//   banner.src = 'images/pic3.png';
// });