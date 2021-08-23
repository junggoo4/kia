// ★★★★ 기아소식 메뉴에 해당되는 화면 js ★★★★

function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
};

$(function() {
    var news_count = 0;
    // Header, footer 연결
    $(".header2").load("header2.html");
    $(".footer").load("footer.html");

    $("html, body").animate({"scrollTop":0}, 500);


    // ================= news ==================
    // news 하단 버튼 클릭시 해당 화면으로 이동
    $(".news_btn").on("click",function(){
        no = $(this).index()-1;
        $(".news_list").hide();
        $(".news_list"+no).show();
        $(".news_btn").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
        news_count = no;
    });

    $(".news_first").on("click",function() {
        $(".news_list").hide();
        $(".news_list1").show();
        $(".news_btn").css({"background":"white", "color":"black"});
        $(".news_btn1").css({"background":"#05141f", "color":"white"});
        news_count = 1;
    });
    $(".news_end").on("click",function() {
        $(".news_list").hide();
        $(".news_list3").show();
        $(".news_btn").css({"background":"white", "color":"black"});
        $(".news_btn3").css({"background":"#05141f", "color":"white"});
        news_count = 3;
    });

    $(".news_left").on("click",function() {
        if(news_count==1){
            news_count = 1;
            return;
        }
        news_count--;
        $(".news_list").hide();
        $(".news_list"+news_count).show();
        $(".news_btn").css({"background":"white", "color":"black"});
        $(".news_btn"+news_count).css({"background":"#05141f", "color":"white"});
    });
    $(".news_right").on("click",function() {
        if(news_count == 0){
            news_count = 1;
        }
        news_count++;
        if(news_count>3){
            news_count = 3;
            return;
        }
        $(".news_list").hide();
        $(".news_list"+news_count).show();
        $(".news_btn").css({"background":"white", "color":"black"});
        $(".news_btn"+news_count).css({"background":"#05141f", "color":"white"});
    });

    // news 게시물 클릭시 해당 게시물 화면 노출
    $(".news_list1> ul:eq(0)> li").on("click",function() {
        no = $(this).index()+1;
        $(".news_list").hide();
        $(".news_control").hide();
        $(".ati_bm").show();
        $(".news_at"+no).show();
        $(".news_bm_btn").hide();
        $(".news_bm_btn1").show();
        top_func();
    });
    $(".news_list1> ul:eq(1)> li").on("click",function() {
        no = $(this).index()+4;
        $(".news_list").hide();
        $(".news_control").hide();
        $(".ati_bm").show();
        $(".news_at"+no).show();
        $(".news_bm_btn").hide();
        $(".news_bm_btn1").show();
        top_func();
    });

    $(".news_list2> ul:eq(0)> li").on("click",function() {
        no = $(this).index()+7;
        $(".news_list").hide();
        $(".news_control").hide();
        $(".ati_bm").show();
        $(".news_at"+no).show();
        $(".news_bm_btn").hide();
        $(".news_bm_btn2").show();
        top_func();
    });
    $(".news_list2> ul:eq(1)> li").on("click",function() {
        no = $(this).index()+10;
        $(".news_list").hide();
        $(".news_control").hide();
        $(".ati_bm").show();
        $(".news_at"+no).show();
        $(".news_bm_btn").hide();
        $(".news_bm_btn2").show();
        top_func();
    });

    $(".news_list3> ul> li").on("click",function() {
        no = $(this).index()+13;
        $(".news_list").hide();
        $(".news_control").hide();
        $(".ati_bm").show();
        $(".news_at"+no).show();
        $(".news_bm_btn").hide();
        $(".news_bm_btn3").show();
        top_func();
    });

    // news 상세 화면에서 목록으로 버튼 클릭시 리스트로 이동
    $(".news_bm_btn1").on("click",function() {
        $(".ati_bm").hide();
        $(".news_at").hide();
        $(".news_list").hide();
        $(this).hide();
        $(".news_list1").show();
        $(".news_control").show();
        top_func();
    });
    $(".news_bm_btn2").on("click",function() {
        $(".ati_bm").hide();
        $(".news_at").hide();
        $(".news_list").hide();
        $(this).hide();
        $(".news_list2").show();
        $(".news_control").show();
        top_func();
    });
    $(".news_bm_btn3").on("click",function() {
        $(".ati_bm").hide();
        $(".news_at").hide();
        $(".news_list").hide();
        $(this).hide();
        $(".news_list3").show();
        $(".news_control").show();
        top_func();
    });



    // ================ 공지사항 =================
    $(".gong_btn").on("click",function() {
        no = $(this).index();
        $(".rayout").hide();
        $(".rayout"+no).show();
        $(".gong_btn").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });
    $(".gong_left").on("click",function() {
        $(".rayout").hide();
        $(".rayout1").show();
        $(".gong_btn").css({"background":"white", "color":"black"});
        $(".gong_btn1").css({"background":"#05141f", "color":"white"});
    });
    $(".gong_right").on("click",function() {
        $(".rayout").hide();
        $(".rayout2").show();
        $(".gong_btn").css({"background":"white", "color":"black"});
        $(".gong_btn2").css({"background":"#05141f", "color":"white"});
    });

    $(".rayout1 ul").on("click",function() {
        no = $(this).index()+2;
        $(".rayout").hide();
        $(".gong_control").hide();
        $(".rayout:eq("+no+")").show();
        $(".gong_bm_btn1").show();
        top_func();
    });
    $(".rayout2 ul").on("click",function() {
        no = $(this).index()+9;
        $(".rayout").hide();
        $(".gong_control").hide();
        $(".rayout:eq("+no+")").show();
        $(".gong_bm_btn2").show();
        top_func();
    });

    $(".gong_bm_btn1").on("click",function() {
        $(".rayout").hide();
        $(this).hide();
        $(".rayout1").show();
        $(".gong_control").show();
        top_func();
    });
    $(".gong_bm_btn2").on("click",function() {
        $(".rayout").hide();
        $(this).hide();
        $(".rayout2").show();
        $(".gong_control").show();
        top_func();
    });


    
    // ================ 이벤트 =================
    $(".rayout1> article").on("click",function() {
        no = $(this).index()+2;
        $(".rayout").hide();
        $(".rayout"+no).show();
        $(".event_bm_btn").show();
        $(".top_btn").show();
        top_func();
    });

    $(".event_bm_btn").on("click",function() {
        $(".rayout").hide();
        $(".top_btn").hide();
        $(this).hide();
        $(".rayout1").show();
        top_func();
    });

    // Top버튼 클릭시 화면 상단으로 이동
    $(".top_btn").on("click",function() {
        $("html, body").stop().animate({"scrollTop":0},500);
    });


});

