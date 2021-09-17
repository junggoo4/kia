// ★★★★ 메인화면 js ★★★★


// Header, footer 연결
$(function() {
    $(".header").load("header.html");
    $(".footer").load("footer.html");

    if (location.href.match('index.html')) {
        head();
    };
});

// 공통 변수 ==================================================================
let time_count = 0;
let timer = setInterval("abc()", 1000);
let timer2 = setInterval("bestkia()", 5000); 

//=========================== ((메인화면)) 시작 ================================
// =============================================================================
// header - 스크롤 내릴 때 css 변경
let head_pos;
function head() {
    $(window).scroll(function() {
        head_pos = $(window).scrollTop();
        if(chk==0){
            src_white();
        }
    });
};

// 메인화면 애니메이션 타이머
function abc() {
    time_count++;
    if(time_count%4==0) { 
        slide1(), slide4();
    }
    if(time_count%5==0) {  
        slide3();
    }
};
function bestkia() {
    time_count++;
    slide2(), slide5();
}


$(function() {
    let mainbig_pos = 500;
    let mainbig_count = 0;
    let mainbig_no = 0;

    // 메인화면 메인 이미지 - 번호버튼 클릭시 해당 이미지로 이동
    $(".bigimg_btn").mouseenter(function() {
        clearInterval(timer);
    });    
    $(".bigimg_btn").mouseleave(function() {
        timer = setInterval("abc()", 5000);
    });
    $(".bigimg_btn li").css({"background":"white", "border":"1px solid #ccc", "width":"15px", "borderRadius":"50%"});
    $(".bigimg_btn1").css({"background":"#05141f", "border":"1px solid white", "width":"70px", "borderRadius":"10px"});

    $(".bigimg_btn li").on("click",function() {
        mainbig_no = $(this).index();
        mainbig_count = mainbig_no;
        mainbig_pos = 1903 * mainbig_no;

        $(".main_bigimg").stop().animate({"left": -mainbig_pos+"px"}, 500);
        $(".bigimg_btn li").css({"background":"white", "border":"1px solid #ccc", "width":"15px", "borderRadius":"50%"});
        $(this).css({"background":"#05141f", "border":"1px solid white", "width":"70px", "borderRadius":"10px"});
    });

    // 메인화면 메인 이미지 - < > 클릭시 이벤트
    $(".arrow").on("mouseenter",function() {
        clearInterval(timer);
    });    
    $(".arrow").on("mouseleave",function() {
        timer = setInterval("abc()", 5000);
    });

    $(".bigimg_prev").on("click",function() {
        if(mainbig_count > 0)
            mainbig_count--;
            mainbig_no = mainbig_count;
            mainbig_pos = 1903 * mainbig_count;
        $(".main_bigimg").stop().animate({"left": -mainbig_pos+"px"}, 500);
        $(".bigimg_btn li").css({"background":"white", "border":"1px solid #ccc", "width":"15px", "borderRadius":"50%"});
        $(".bigimg_btn li:eq("+mainbig_count+")").css({"background":"#05141f", "border":"1px solid white", "width":"70px", "borderRadius":"10px"});
    });
    $(".bigimg_next").on("click",function() {
        if(mainbig_count < 4)
            mainbig_count++;
            mainbig_no = mainbig_count;
            mainbig_pos = 1903 * mainbig_count;
        $(".main_bigimg").stop().animate({"left": -mainbig_pos+"px"}, 500);
        $(".bigimg_btn li").css({"background":"white", "border":"1px solid #ccc", "width":"15px", "borderRadius":"50%"});
        $(".bigimg_btn li:eq("+mainbig_count+")").css({"background":"#05141f", "border":"1px solid white", "width":"70px", "borderRadius":"10px"});
    });   

    
    // 메인화면 BEST KIA - 이미지 < > 버튼 클릭시 슬라이드
    $(".main_next").on("click",function() {
        $(".slide_img_6").stop().animate({"left":"-=25%"}, 300, function() {
            $(".slide_img_6> li:first").appendTo(".slide_img_6");
            $(".slide_img_6").css({"left":"+=25%"});
            $(".slide_img_6> li> a> .img").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li> a> p").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li:eq(1)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(1)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(2)> a> .img").css({"opacity":"1", "transform":"scale(1.4)", "transition":"all 0.5s"});
            $(".slide_img_6> li:eq(2)> a> p").css({"opacity":"1"});
        });
    });
    $(".main_prev").on("click",function() {
        $(".slide_img_6").stop().animate({"left":"+=25%"}, 300, function() {
            $(".slide_img_6> li:last").prependTo(".slide_img_6");
            $(".slide_img_6").css("left","-=25%");
            $(".slide_img_6> li> a> .img").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li> a> p").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li:eq(1)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(1)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(2)> a> .img").css({"opacity":"1", "transform":"scale(1.4)", "transition":"all 0.5s"});
            $(".slide_img_6> li:eq(2)> a> p").css({"opacity":"1"});
        });
    });


    // 메인화면 BEST KIA - < > 버튼에 hover시 슬라이드 멈춤처리
    $(".main_arrow").mouseenter(function() {
        clearInterval(timer2);
    });    
    $(".main_arrow").mouseleave(function() {
        timer2 = setInterval("bestkia()", 5000);
    });

});


// 메인화면 EVENT KIA - < > 클릭시 이미지, 텍스트 변경
$(window).ready(function() {
    var i = $(this).index()+1;
    var len = $(".event_img").length;

    $(".event_prev").click(function() {
        if (i == 0){
            i = len -1;
        } else {
            i = i -1;
        }
        showSlide();
    });
    $(".event_next").click(function() {
        if (i == 4){
            i = 0;
        } else {
            i = i +1;
        }
        showSlide();
    });
    
    function showSlide() {
        $(".event_img").stop(true, true).fadeOut();
        $(".event_img").eq(i).stop(true, true).fadeIn();
    };
});


//=========================== ((메인화면)) 함수 시작 ============================
// 공통(새로고침시 무조건 스크롤 올리기)
function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
};

// 메인화면 스크롤에 따른 header 스타일 변경
function src_white() {
    if(head_pos>100) {
        $("header").css({"background":"white", "borderBottom":"1px solid #ccc"});
        $(".head1 ul li").css({"color":"#05141f"});
        $(".head1 ul li .logo_w").css({"display":"none"});
        $(".head1 ul li .logo_b").css({"display":"block"});
        $(".head1").mouseenter(function() {
            $(this).css("background","white");
            $(".head1 ul li").css("color","#05141f");
            $(".head1 ul .logo .logo_w").hide();
            $(".head1 ul .logo .logo_b").show();
        });    
        $(".head1").mouseleave(function() {
            $(this).css("background","white");
            $(".head1 ul li").css("color","#05141f");
            $(".head1 ul .logo .logo_w").hide();
            $(".head1 ul .logo .logo_b").show()
        }); 
    }
    else {
        $("header").css({"background":"none"});
        $(".head1").trigger('mouseleave');
        
        $(".head1").mouseenter(function() {
            $("header").css({"background":"white"});
            $(this).css("background","white");
            $(".head1 ul li").css("color","#05141f");
            $(".head1 ul .logo .logo_w").hide();
            $(".head1 ul .logo .logo_b").show();
        });    
        $(".head1").mouseleave(function() {
            $("header").css({"background":"none"});
            $(this).css("background","none");
            $(".head1 ul li").css("color","white");
            $(".head1 ul .logo .logo_b").hide();
            $(".head1 ul .logo .logo_w").show();
        }); 
    }; 
};




// 메인화면 메인 이미지 - 슬라이드
let ani1 = 1;
function slide1() {
    if(ani1<=4)
        ani1++;
    else    
        ani1=1;
        $(".bigimg_btn li").css({"background":"white", "border":"1px solid #ccc", "width":"15px", "borderRadius":"50%"});
        $(".bigimg_btn"+ani1).css({"background":"#05141f", "border":"1px solid white", "width":"70px", "borderRadius":"10px"});

        $(".main_bigimg").stop().animate({"left":"-=100%"}, 500, function() {
            $(".main_bigimg> li:first").appendTo(".main_bigimg");
            $(".main_bigimg").css("left","+=100%");
        });
};


// 메인화면 BEST KIA - 이미지 슬라이드
function slide2() { 
    $(".slide_img_6").stop().animate({"left":"-=25%"}, 300, function() {
        $(".slide_img_6> li:first").appendTo(".slide_img_6");
        $(".slide_img_6").css("left","+=25%");
    });
    if(matchMedia("screen and (min-width: 1024px)").matches){
        $(".slide_img_6").stop().animate({"left":"-=25%"}, 300, function() {
            $(".slide_img_6> li:first").appendTo(".slide_img_6");
            $(".slide_img_6").css("left","+=25%");
            $(".slide_img_6> li> a> .img").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li> a> p").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li:eq(1)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(1)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(2)> a> .img").css({"opacity":"1", "transform":"scale(1.4)", "transition":"all 0.5s"});
            $(".slide_img_6> li:eq(2)> a> p").css({"opacity":"1"});
        });
    };
    if(matchMedia("screen and (max-width: 1023px)").matches){
        $(".slide_img_6").stop().animate({"left":"-=210px"}, 300, function() {
            $(".slide_img_6> li:first").appendTo(".slide_img_6");
            $(".slide_img_6").css("left","+=210px");
            $(".slide_img_6> li> a> .img").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li> a> p").css({"opacity":"0.3","transform":"scale(1)"});
            $(".slide_img_6> li:eq(1)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(1)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> .img").css({"opacity":"1"});
            $(".slide_img_6> li:eq(3)> a> p").css({"opacity":"1"});
            $(".slide_img_6> li:eq(2)> a> .img").css({"opacity":"1", "transform":"scale(1.3)", "transition":"all 0.5s"});
            $(".slide_img_6> li:eq(2)> a> p").css({"opacity":"1"});
        });
    };
};


// 메인화면 KIA NEWS - 이미지 슬라이드
let ani2 = 1;
function slide3() {
    if(ani2<=5)
        ani2++;
    else
        ani2=1;
        $(".news_btn li").css({"background":"#ccc", "width":"20px", "borderRadius":"100%"});
        $(".news_btn"+ani2).css({"background":"#05141f", "width":"60px", "borderRadius":"10px"});

    $(".news_img_6").stop().animate({"left":"-=415px"}, 400, function() {
        $(".news_img_6 > li:first").appendTo(".news_img_6");
        $(".news_img_6").css("left", "+=415px");
    });
    $(".news_text_6").stop().animate({"left":"-=415px"}, 400, function() {
        $(".news_text_6 > li:first").appendTo(".news_text_6");
        $(".news_text_6").css("left", "+=415px");
    });

    if(matchMedia("screen and (min-width:421px) and (max-width:767px)").matches){
        $(".news_img_6").stop().animate({"left":"-=70%"}, 400, function() {
            $(".news_img_6 > li:first").appendTo(".news_img_6");
            $(".news_img_6").css("left", "+=70%");
        });
        $(".news_text_6").stop().animate({"left":"-=70%"}, 400, function() {
            $(".news_text_6 > li:first").appendTo(".news_text_6");
            $(".news_text_6").css("left", "+=70%");
        });
    }
};


// 메인화면 EVENT KIA - 클릭시 해당 게시물로 이동
function re_menu1(idx){
    location.href = "menu4_3.html?value="+idx;
};

// 메인화면 공지사항 - 클릭시 해당 게시물로 이동
function re_menu(idx){
    //sub.html?변수1=값&변수2=값&변수3=값;
    location.href = "menu4_2.html?value="+idx;
};

// 메인화면 KIA NEWS - 클릭시 해당 게시물로 이동
function re_menu2(idx){
    location.href = "menu4_1.html?value="+idx;
};



// 모바일) 메인화면 메인 이미지 - 슬라이드
let ani4 = 1;
function slide4() {
    if(ani4<=4)
        ani4++;
    else    
        ani4=1;
        $(".m_bigimg_btn li").css({"background":"white", "border":"1px solid #ccc", "width":"12px", "borderRadius":"50%"});
        $(".m_bigimg_btn"+ani4).css({"background":"#05141f", "border":"1px solid white", "width":"50px", "borderRadius":"10px"});

        $(".main_bigimg").stop().animate({"left":"-=100%"}, 500, function() {
            $(".main_bigimg> li:first").appendTo(".main_bigimg");
            $(".main_bigimg").css("left","+=100%");
        });
};


// 모바일) 메인화면 BEST KIA - 이미지 슬라이드
function slide5() { 
    no = $(this).index()+3;
    $(".m_slide_img_6 li:eq("+no+")> a> .img").css({"transform":"scale(1.4)", "opacity":"1"});
    $(".m_slide_img_6").stop().animate({"left":"-=100%"}, 300, function() {
        $(".m_slide_img_6> li:first").appendTo(".m_slide_img_6");
        $(".m_slide_img_6").css("left","+=100%");

        $(".m_slide_img_6 li> a> .img").css({"transform":"none", "opacity":"0.3"});
        $(".m_slide_img_6 li:eq("+no+")> a> .img").css({"transform":"scale(1.4)", "opacity":"1"});
        $(".m_slide_img_6 li> a> .name").css({"opacity":"0"});
        $(".m_slide_img_6 li> a> .text").css({"opacity":"0"});
        $(".m_slide_img_6 li:eq("+no+")> a> .name").css({"opacity":"1"});
        $(".m_slide_img_6 li:eq("+no+")> a> .text").css({"opacity":"1"});
    });
};
