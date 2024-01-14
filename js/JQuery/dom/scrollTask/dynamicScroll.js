$(()=>{

    let redNavTop = $(".nav-box > nav:first-child").offset().top;
    $(window).scroll(function(){
        if($(this).scrollTop() >= redNavTop){
            //첫번째 nav
            $(".nav-box > nav:first-child").removeClass("swingNav-first");
            $(".nav-box > nav:first-child").addClass("showNav-first");
            $(".nav-box > nav:first-child>ul").addClass("red-textColor");
            //두번째 nav
            $(".nav-box > nav:last-child").removeClass("swingNav-last");
            $(".nav-box > nav:last-child").addClass("showNav-last");
            $(".nav-box > nav:last-child>ul").addClass("red-textColor");

            //display 
            $(".red-zone > .red-con").addClass("contents");
            $(".red-zone > .red-con").removeClass("visibility-hidden");
        }else{
            //첫번째 nav
            $(".nav-box > nav:first-child").addClass("swingNav-first");
            $(".nav-box > nav:first-child").removeClass("showNav-first");
            $(".nav-box > nav:first-child>ul").removeClass("red-textColor");
            //두번째 nav
            $(".nav-box > nav:last-child").addClass("swingNav-last");
            $(".nav-box > nav:last-child").removeClass("showNav-last");
            $(".nav-box > nav:last-child>ul").removeClass("red-textColor");
            //display 
            $(".red-zone > .red-con").removeClass("contents");
            $(".red-zone > .red-con").addClass("visibility-hidden");
            
        }
    });

})