// SHOW & HIDE ELEMENTS

$(document).ready(function(){
  $('button').click(function() {
    $('#slogan').css({
      'display': 'none',
    });
    $('.tablink').css({
      'mix-blend-mode': 'normal',
    });
  
});
});

// MAIN MENU
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// p5
// createCanvas(windowWidth, windowHeight, WEBGL);
// background('rgba(0,255,0, 0)');




