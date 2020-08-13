$(document).ready(function(){
    var scrollLink = $('.scroll');

    //Smooth Scrolling
    scrollLink.click(function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        },1500 )
    });

    //Active Link Switch
    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function(){

            var sectionOffset = $(this.hash).offset().top -20

            if(sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }

        })
    })

    // On click Nav Active
    $(".nav a").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).parent().addClass("active");
     });

     //Close NAvbar on click
     $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $('#nav-but').click(function(){
        $('#logo').toggle('slow');
    });

})