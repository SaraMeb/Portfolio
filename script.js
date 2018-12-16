document.querySelector('[data-action="toggleMenu"]').addEventListener('click', function (){
  if(window.innerWidth <= 800) {
  let menu = document.querySelector('nav');
     menu.classList.toggle('hidden');
    }
})



function load() {


  let elem1 = document.querySelector("#progress_html");
  let width1 = 1;
  let id1 = setInterval(frame1, 10);
  function frame1() {
    if (width1 >= 80) {
      clearInterval(id1);
    } else {
      width1++;
      elem1.style.width = width1 + '%';
      //innerHTML pour inserer le %
    }
  }

  let elem2 = document.querySelector("#progress_css");
  let width2 = 1;
  let id2 = setInterval(frame2, 10);
  function frame2() {
    if (width2 >= 75) {
      clearInterval(id2);
    } else {
      width2++;
      elem2.style.width = width2 + '%';
    }
  }

  let elem3 = document.querySelector("#progress_js");
  let width3 = 1;
  let id3 = setInterval(frame3, 10);
  function frame3() {
    if (width3 >= 45) {
      clearInterval(id3);
    } else {
      width3++;
      elem3.style.width = width3 + '%';
    }
  }

  let elem4 = document.querySelector("#progress_php");
  let width4 = 1;
  let id4 = setInterval(frame4, 10);
  function frame4() {
    if (width4 >= 55) {
      clearInterval(id4);
    } else {
      width4++;
      elem4.style.width = width4 + '%';
    }
  }
  let elem5 = document.querySelector("#progress_sql");
  let width5 = 1;
  let id5 = setInterval(frame5, 10);
  function frame5() {
    if (width5 >= 65) {
      clearInterval(id5);
    } else {
      width5++;
      elem5.style.width = width5 + '%';
    }
  }
  let elem6 = document.querySelector("#progress_laravel");
  let width6 = 1;
  let id6 = setInterval(frame6, 10);
  function frame6() {
    if (width6 >= 70) {
      clearInterval(id6);
    } else {
      width6++;
      elem6.style.width = width6 + '%';
    }
  }
  let elem7 = document.querySelector("#progress_wordpress");
  let width7 = 1;
  let id7 = setInterval(frame7, 10);
  function frame7() {
    if (width7 >= 50) {
      clearInterval(id7);
    } else {
      width7++;
      elem7.style.width = width7 + '%';
    }
  }
  let elem8 = document.querySelector("#progress_nodejs");
  let width8 = 1;
  let id8 = setInterval(frame8, 10);
  function frame8() {
    if (width8 >= 45) {
      clearInterval(id8);
    } else {
      width8++;
      elem8.style.width = width8 + '%';
    }
  }

}
//fonction pour opacity du header
window.addEventListener('scroll', function(){
  headerTransparent();
});
function headerTransparent(){
  document.getElementById('head').classList.add('transparent');
}
