window.PixleeAsyncInit = function()
    {Pixlee.init({apiKey:'OJdmiQCo9vY6u1yHlcl9'});
    Pixlee.addSimpleWidget({widgetId:'17151'});};</script>

    // MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
//nav bar scrolling attempts

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currnav-nav-link = $(this);
        var refElement = $(currnav-link.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
