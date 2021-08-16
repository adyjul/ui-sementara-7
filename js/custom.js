$(document).ready(function(){
  // if ($(".carousel-item .active")) {
  //   console.log("hai");
  // } else if ($(".carousel-item")) {
  //   console.log("kk");
  // }

  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });  


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var box = $(".jumbotron").height() - 100;
    var header = $(".navbar").height();

    if (scroll >= box - header) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });


  var elementWindow = $(document).width();
  if (979 >= elementWindow) {
    $(".modal-dialog").css("height","70%");  
    $(".sub-menu-item").css("margin-left","13px");
    $(".sub-menu-item").removeClass("col-3");
    $(".sub-menu-item").addClass("col-5");
  } else {
    $(".modal-dialog").css("height","100%");  
    $(".sub-menu-item").css("margin-left","40px");
    $(".sub-menu-item").removeClass("col-5");
    $(".sub-menu-item").addClass("col-3");  
  }

  $(window).resize(function () {
    // console.log($(document).width())
    var element = $(document).width();
    if (979 >= element) {
      $(".modal-dialog").css("height","70%");  
      $(".sub-menu-item").css("margin-left","13px");
      $(".sub-menu-item").removeClass("col-3");
      $(".sub-menu-item").addClass("col-5"); 
    } else {
      $(".modal-dialog").css("height","100%");  
      $(".sub-menu-item").css("margin-left","40px");
      $(".sub-menu-item").removeClass("col-5");
      $(".sub-menu-item").addClass("col-3"); 
    }
  });

  // var id = $(".navbar-toggler")


  $(".btn-select").click(function(){
    $(".btn-select").removeClass("card-active");
    var btn = $(".btn-select",this);
    var value = $(this).attr("data-name");

    var piala = $(".piala");
    var lab = $(".lab");
    var fasilitas = $(".fasilitas");
    var pengajar = $(".pengajar");

    if(value == "profile"){
      //profile
      piala.css("display","flex");      
      //lab
      lab.css("display","none");
      //fasilitas
      fasilitas.css("display","none");
      //pengajar
      pengajar.css("display","none");
    }else if(value=="lab"){
      //lab
      lab.css("display","flex");
      //profile
      piala.css("display","none");
      //fasilitas
      fasilitas.css("display","none");
      //pengajar
      pengajar.css("display","none")
      
    }else if(value=="fasilitas"){
      //fasilitas
      fasilitas.css("display","flex");
      //profile
      piala.css("display","none");
      //lab
      lab.css("display","none");
      //pengajar
      pengajar.css("display","none")
    }else if(value=="pengajar"){
      //fasilitas
      fasilitas.css("display","none");
      //profile
      piala.css("display","none");
      //lab
      lab.css("display","none");
      //pengajar
      pengajar.css("display","flex");
    }

    $(btn.prevObject[0]).addClass("card-active");    
  })
  

  var scrollLink = $(".scroll-to-section");
  scrollLink.click(function (e) {
    e.preventDefault();
    console.log(scrollLink)
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top - 70,
      },
      1000,
      "easeInOutExpo"
    );
  });

  
  var mainMenu = $(".main-menu");
  var btnBack = $(".btn-back");

  // $(".btn-select").click(function(){       
  //   var value = $(this).attr("data-name");
  //   var grid = $(".item")
  //   grid.isotope({ filter: value });
  //   if(value == ".profile"){
  //     console.log()
  //     $(".profile").css("display","flex")       
  //   }else if(value == ".lab"){
  //     $(".lab").css("display","flex");             
  //   }
  // });

  // $(".btn-back").click(function(){
  //   console.log("hai");
  //   mainMenu.css("display","flex");
  //   displayGrid.css("display","none");
  //   btnBack.css("display","none")
  // })
  
  var grid = $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  
  var displayGrid = $(".grid"); 
  var mainMenu = $(".main-menu");
  var btnBack = $(".btn-back");

  $(".jr").click(function(){   
    displayGrid.css("display","block");
    mainMenu.css("display","none");
    btnBack.css("display","block");

    var value = $(this).attr("data-name")
    grid.isotope({ filter: value })  
  });

  $(".btn-back").click(function(){
    console.log("hai");
    mainMenu.css("display","flex");
    displayGrid.css("display","none");
    btnBack.css("display","none")
  })

  $(".berita").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    margin: 80,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".guru").owlCarousel({
    autoplay: true,
    dots: false,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 5,
      },
      992: {
        items: 6,
      },
    },
  });

  // Window Resize Mobile Menu Fix

  // Scroll animation init

  // Window Resize Mobile Menu Fix

  // Window Resize Mobile Menu Fix

});