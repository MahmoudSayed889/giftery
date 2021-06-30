

$(".arrow").click( function(){

    
    if( $(".up-navbar .arrow i").css( "transform" ) == 'matrix(1, 0, 0, 1, 0, 0)' )
    {
        $(".up-navbar .arrow i").css( "transform" , "rotate(180deg)" );
        $(".up-navbar .content").slideUp();
    }
    else
    {
        $(".up-navbar .arrow i").css( "transform" , "rotate(0deg)" )
        $(".up-navbar .content").slideDown();
        
    }
})


$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

let navbar = document.getElementById("navbar")


$(window).scroll( function(){

    let infoScroll = $(window).scrollTop();
    
    if( infoScroll > 200 )
    {
        $("#btnTop").fadeIn(500);
        navbar.classList.add("fixed-top","shadow-sm","animate__flipInX");
    }
    else
    {
        $("#btnTop").fadeOut(500);
        navbar.classList.remove("fixed-top","shadow-sm","animate__flipInX");
    }
})

$("#btnTop").click( function(){

    $("html , body").animate( {scrollTop: 0} , 1000 )
})


let searchIcon = document.getElementById("searchIcon");
let searhBody = document.getElementById("searhBody");
let searchBodyBg = document.getElementById("searchBodyBg");

$("#searchIcon").click( function(){

    searhBody.classList.add("fixed-top","w-75","bg-white","p-3","rounded-sm","animate__slideInDown");
    searhBody.classList.remove("d-none","position-relative");
    $("#searchBodyBg").fadeIn(500);
})
$("#searchBodyBg").click( function(){

    searhBody.classList.remove("fixed-top","w-75","bg-white","p-3","rounded-sm");
    searhBody.classList.add("d-none","position-relative");
    $("#searchBodyBg").fadeOut(500);
});

let widthIcon = $("#cart #arrowRight").innerWidth();
let widthCart = $("#cart").innerWidth();
let widthFav = $("#fav").innerWidth();

$("#cart").css("right", -widthCart + -widthIcon);
$("#fav").css("right", -widthFav + -widthIcon);
$("#cart #arrowRight , #fav #arrowRight").css("left",-widthIcon/2);

$("#arrowRight , #layerCart , #cart button , #fav button").click(function (){

    $("#cart").css("right", -widthCart + -widthIcon);
    $("#fav").css("right", -widthFav + -widthIcon);
    $("#layerCart").fadeOut(1000);
});

$("#myCart").click( function(){

    $("#cart").css("right", "0");
    $("#layerCart").fadeIn(1000);
});


$("#myFav").click( function(){

    $("#fav").css("right", "0");
    $("#layerCart").fadeIn(1000);
});