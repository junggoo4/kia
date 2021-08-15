// ★★★★ 차량 메뉴에 해당되는 화면 js ★★★★

// Header, footer 연결
$(function() {
    $(".header2").load("header2.html");
    $(".footer").load("footer.html");

    if (location.href.match('morning.html')) {
        mor();
    };
    if (location.href.match('k5.html')) {
        k5();
    };
    if (location.href.match('sorento.html')) {
        sorento();
    };
    if (location.href.match('niro.html')) {
        niro();
    };
    if (location.href.match('seltos.html')) {
        seltos();
    };
    if (location.href.match('mohave.html')) {
        mohave();
    };
    if (location.href.match('bonggo3.html')) {
        bonggo3();
    };
    if (location.href.match('k8_taxi.html')) {
        k8_taxi();
    };

    $(window).scroll(function() {
        var sc = $(window).scrollTop()+160;
        var ct = $(".pc_menu>div").length;
        for(var i=1; i<ct; i++){
            var pt = $("article").eq(i).position().top;
            if(sc >= pt) {
                $(".pc_menu div").css("background","rgba(5, 20, 30, 0.6)");
                $(".pc_menu div").eq(i).css("background","#05141f");
            };
        };
    });
    // $(window).scroll(function() {
    //     var sc = $(window).scrollTop()+145;
    //     var ct = $(".mob_menu>ul>li").length;
    //     for(var i=1; i<ct; i++){
    //         var pt = $("article").eq(i).position().top;
    //         if(sc >= pt) {
    //             $(".mob_menu ul li").css({"color":"black", "fontWeight":"500"});
    //             $(".mob_menu ul li").eq(i).css({"color":"red", "fontWeight":"bold"});
    //         };
    //     };
    // });
});


let mor_pos;
function mor() {
    $(window).scroll(function() {
        mor_pos = $(window).scrollTop();
        scr_car();
    });
};
let k5_pos;
function k5() {
    $(window).scroll(function() {
        k5_pos = $(window).scrollTop();
        scr_car2();
    });
};
let sorento_pos;
function sorento() {
    $(window).scroll(function() {
        sorento_pos = $(window).scrollTop();
        scr_car3();
    });
};
let niro_pos;
function niro() {
    $(window).scroll(function() {
        niro_pos = $(window).scrollTop();
        scr_car4();
    });
};
let seltos_pos;
function seltos() {
    $(window).scroll(function() {
        seltos_pos = $(window).scrollTop();
        scr_car5();
    });
};
let mohave_pos;
function mohave() {
    $(window).scroll(function() {
        mohave_pos = $(window).scrollTop();
        scr_car6();
    });
};
let bonggo3_pos;
function bonggo3() {
    $(window).scroll(function() {
        bonggo3_pos = $(window).scrollTop();
        scr_car7();
    });
};
let k8_taxi_pos;
function k8_taxi() {
    $(window).scroll(function() {
        k8_taxi_pos = $(window).scrollTop();
        scr_car8();
    });
};

// 공통(새로고침시 무조건 스크롤 올리기)
function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
};

// //================================ ((차량)) 시작 =================================
// ==================================================================================
// 특징 - 차량 별 메뉴명
const menuA = {
    "menu1" : ["개요","색상","외장","내장","도심형 주행기술","멀티미디어","공간","파워트레인","안전","구매정보"],
    "menu2" : ["개요","색상","외장","내장","인터랙티브 기술","주행 안전 / 편의","구매정보"],
    "menu3" : ["개요","색상","외장","내장","성능 / 안전 / 편의","그래비티","구매정보"],
    "menu4" : ["개요","색상","외장","내장","기술","연비","공간","성능","편의","구매정보"],
    "menu5" : ["개요","색상","그래비티","외장","내장","편의","공간","성능","안전","구매정보"],
    "menu6" : ["개요","색상","그래비티","외장","내장","성능","편의","공간","안전","구매정보"],
    "menu7" : ["개요","비디오","내장","안전 / 사양","편의사양","구매정보"],
    "menu8" : ["개요","외장","내장 / 시트","편의","파워트레인 / 안전","구매정보"]
}

let heig, ati_pos;
window.onload = function() {
    $("html, body").animate({"scrollTop":0}, 500);

    for(i=0; i<menuA.menu1.length; i++) {
        $(".mor_pc_menu div:eq("+i+")").html(menuA.menu1[(i)]);
        $(".mor_mob_menu ul li:eq("+i+")").html(menuA.menu1[(i)]);
    }
    for(i=0; i<menuA.menu2.length; i++) {
        $(".k5_pc_menu div:eq("+i+")").html(menuA.menu2[(i)]);
    }
    for(i=0; i<menuA.menu3.length; i++) {
        $(".sorento_pc_menu div:eq("+i+")").html(menuA.menu3[(i)]);
    }
    for(i=0; i<menuA.menu4.length; i++) {
        $(".niro_pc_menu div:eq("+i+")").html(menuA.menu4[(i)]);
    }
    for(i=0; i<menuA.menu5.length; i++) {
        $(".seltos_pc_menu div:eq("+i+")").html(menuA.menu5[(i)]);
    }
    for(i=0; i<menuA.menu6.length; i++) {
        $(".mohave_pc_menu div:eq("+i+")").html(menuA.menu6[(i)]);
    }
    for(i=0; i<menuA.menu7.length; i++) {
        $(".bonggo3_pc_menu div:eq("+i+")").html(menuA.menu7[(i)]);
    }
    for(i=0; i<menuA.menu8.length; i++) {
        $(".k8_taxi_pc_menu div:eq("+i+")").html(menuA.menu8[(i)]);
    }
};

$(function() {
    // 공통 - 특징 - 우측 버튼(nav) 클릭시 해당 아티클로 이동
    $(".pc_menu div").on("click",function() {
        no=$(this).index();
        var at_scr = $("article").eq(no).offset().top;

        $("html, body").animate({"scrollTop":(at_scr-160)+"px"}, 500);
        $(".pc_menu div").css("background","rgba(5, 20, 30, 0.6)");
        $(this).css("background","#05141f");
    });
    // 모바일) 공통 - 특징 - 우측 버튼(nav) 클릭시 해당 아티클로 이동
    // $(".mob_menu ul li").on("click",function() {
    //     no=$(this).index();
    //     var at_scr = $("article").eq(no).offset().top;

    //     $("html, body").animate({"scrollTop":(at_scr-160)+"px"}, 500);
    //     $(".mob_menu div").css("border","none");
    //     $(this).css("border","5px solid #05141f");
    // });


    // 모닝 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".title_btn1").on("click",function() {
        $(".morning").hide();
        $(".morning_1").show();
        $(".title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".title_btn2").on("click",function() {
        $(".morning").hide();
        $(".morning_2").show();
        $(".title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    // 모바일) 모닝 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".title_btn01").on("click",function() {
        $(".morning").hide();
        $(".morning_1").show();
        $(".title_btn0").css("fontWeight","500");
        $(this).css("fontWeight","bold");
        top_func();
    });
    $(".title_btn02").on("click",function() {
        $(".morning").hide();
        $(".morning_2").show();
        $(".title_btn0").css("fontWeight","500");
        $(this).css("fontWeight","bold");
        top_func();
    });

    // 모닝 - 특징 - 색상(at2)
    $(".mor0 li").on("click",function() {
        no=$(this).index();
        $(".mor_at2_color").hide();
        $(".mor_at2_name").hide();
        $(".mor_at2_color"+no).show();
        $(".mor_at2_name"+no).show();
    });

    // 모닝 - 특징 - 외장(at3)
    $(".mor_at3_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at3 .mor_at3_big").hide();
        $(".mor_at3_big"+no).show();
        $(".mor_at3_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });

    // 모바일) 모닝 - 특징 - 외장(at3) - 이미지 < > 클릭시 이동
    let mor1_img_pos = 500;
    let mor1_img_count = 0;
    let mor1_img_no = 0;
    $(".mor_at3_right").on("click",function() {
        if(mor1_img_count < 5)
            mor1_img_count++;
            mor1_img_no = mor1_img_count;
            mor1_img_pos = 300 * mor1_img_count;
        $(".mor_at3_imgbox").stop().animate({"left": -mor1_img_pos+"px"}, 100);
        if(mor1_img_count == 1) {
            $(".mor_at3_left").css("color","white");
        }
        if(mor1_img_count == 5) {
            $(".mor_at3_right").css("color","#898989");
        }
    });
    $(".mor_at3_left").on("click",function() {
        if(mor1_img_count > 0)
            mor1_img_count--;
            mor1_img_no = mor1_img_count;
            mor1_img_pos = 300 * mor1_img_count;
        $(".mor_at3_imgbox").stop().animate({"left": -mor1_img_pos+"px"}, 100);
        if(mor1_img_count == 0) {
            $(".mor_at3_left").css("color","#898989");
        }
        if(mor1_img_count == 4) {
            $(".mor_at3_right").css("color","white");
        }
    });

     // 모닝 - 특징 - 내장(at4)
     $(".mor_at4_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at4 .mor_at4_big").hide();
        $(".mor_at4_big"+no).show();
        $(".mor_at4_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });

    // 모바일) 모닝 - 특징 - 도심형 주행기술(at5) - 이미지 < > 클릭시 이동
    let mor2_img_pos = 500;
    let mor2_img_count = 0;
    let mor2_img_no = 0;
    $(".mor_at5_right").on("click",function() {
        if(mor2_img_count < 4)
            mor2_img_count++;
            mor2_img_no = mor2_img_count;
            mor2_img_pos = 300 * mor2_img_count;
        $(".mor_at5_imgbox").stop().animate({"left": -mor2_img_pos+"px"}, 100);
        if(mor2_img_count == 1) {
            $(".mor_at5_left").css("color","white");
        }
        if(mor2_img_count == 4) {
            $(".mor_at5_right").css("color","#898989");
        }
    });
    $(".mor_at5_left").on("click",function() {
        if(mor2_img_count > 0)
            mor2_img_count--;
            mor2_img_no = mor2_img_count;
            mor2_img_pos = 300 * mor2_img_count;
        $(".mor_at5_imgbox").stop().animate({"left": -mor2_img_pos+"px"}, 100);
        if(mor2_img_count == 0) {
            $(".mor_at5_left").css("color","#898989");
        }
        if(mor2_img_count == 3) {
            $(".mor_at5_right").css("color","white");
        }
    });

    // 모바일) 모닝 - 특징 - 멀티미디어(at6) - 이미지 < > 클릭시 이동
    let mor3_img_pos = 500;
    let mor3_img_count = 0;
    let mor3_img_no = 0;
    $(".mor_at6_right").on("click",function() {
        if(mor3_img_count < 6)
            mor3_img_count++;
            mor3_img_no = mor3_img_count;
            mor3_img_pos = 300 * mor3_img_count;
        $(".mor_at6_imgbox").stop().animate({"left": -mor3_img_pos+"px"}, 100);
        if(mor3_img_count == 1) {
            $(".mor_at6_left").css("color","white");
        }
        if(mor3_img_count == 6) {
            $(".mor_at6_right").css("color","#898989");
        }
    });
    $(".mor_at6_left").on("click",function() {
        if(mor3_img_count > 0)
            mor3_img_count--;
            mor3_img_no = mor3_img_count;
            mor3_img_pos = 300 * mor3_img_count;
        $(".mor_at6_imgbox").stop().animate({"left": -mor3_img_pos+"px"}, 100);
        if(mor3_img_count == 0) {
            $(".mor_at6_left").css("color","#898989");
        }
        if(mor3_img_count == 5) {
            $(".mor_at6_right").css("color","white");
        }
    });

    // 모바일) 모닝 - 특징 - 공간(at7) - 이미지 < > 클릭시 이동
    let mor4_img_pos = 500;
    let mor4_img_count = 0;
    let mor4_img_no = 0;
    $(".mor_at7_right").on("click",function() {
        if(mor4_img_count < 5)
            mor4_img_count++;
            mor4_img_no = mor4_img_count;
            mor4_img_pos = 300 * mor4_img_count;
        $(".mor_at7_imgbox").stop().animate({"left": -mor4_img_pos+"px"}, 100);
        if(mor4_img_count == 1) {
            $(".mor_at7_left").css("color","white");
        }
        if(mor4_img_count == 5) {
            $(".mor_at7_right").css("color","#898989");
        }
    });
    $(".mor_at7_left").on("click",function() {
        if(mor4_img_count > 0)
            mor4_img_count--;
            mor4_img_no = mor4_img_count;
            mor4_img_pos = 300 * mor4_img_count;
        $(".mor_at7_imgbox").stop().animate({"left": -mor4_img_pos+"px"}, 100);
        if(mor4_img_count == 0) {
            $(".mor_at7_left").css("color","#898989");
        }
        if(mor4_img_count == 4) {
            $(".mor_at7_right").css("color","white");
        }
    });

    // 모바일) 모닝 - 특징 - 안전(at9) - 이미지 < > 클릭시 이동
    let mor5_img_pos = 500;
    let mor5_img_count = 0;
    let mor5_img_no = 0;
    $(".mor_at9_right").on("click",function() {
        if(mor5_img_count < 2)
            mor5_img_count++;
            mor5_img_no = mor5_img_count;
            mor5_img_pos = 300 * mor5_img_count;
        $(".mor_at9_imgbox").stop().animate({"left": -mor5_img_pos+"px"}, 100);
        if(mor5_img_count == 1) {
            $(".mor_at9_left").css("color","white");
        }
        if(mor5_img_count == 2) {
            $(".mor_at9_right").css("color","#898989");
        }
    });
    $(".mor_at9_left").on("click",function() {
        if(mor5_img_count > 0)
            mor5_img_count--;
            mor5_img_no = mor5_img_count;
            mor5_img_pos = 300 * mor5_img_count;
        $(".mor_at9_imgbox").stop().animate({"left": -mor5_img_pos+"px"}, 100);
        if(mor5_img_count == 0) {
            $(".mor_at9_left").css("color","#898989");
        }
        if(mor5_img_count == 1) {
            $(".mor_at9_right").css("color","white");
        }
    });

    // 모닝 - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".mor2_spec_btn1").on("click",function() {
        $(".mor2_spec_2").hide();
        $(".mor2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".mor2_spec_btn2").css({"background":"#ccc", "color":"black"});
        $(".mor2_prev2, .mor2_next2").hide();
        if(mor2_spec_count == 0) {
            $(".mor2_prev").hide();
            $(".mor2_next").show();
        }
        if(mor2_spec_count == 1) {
            $(".mor2_prev").show();
            $(".mor2_next").show();
        }
        if(mor2_spec_count == 2) {
            $(".mor2_prev").show();
            $(".mor2_next").hide();
        }
    });
    $(".mor2_spec_btn2").on("click",function() {
        $(".mor2_spec_1").hide();
        $(".mor2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".mor2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".mor2_prev, .mor2_next").hide();
        if(mor2_spec_count1 == 0) {
            $(".mor2_prev2").hide();
            $(".mor2_next2").show();
        }
        if(mor2_spec_count1 == 1) {
            $(".mor2_prev2").show();
            $(".mor2_next2").show();
        }
        if(mor2_spec_count1 == 2) {
            $(".mor2_prev2").show();
            $(".mor2_next2").hide();
        }
    });

    // 모닝 - 제원 - 제원 < > 클릭시 이미지 이동
    let mor2_spec_pos = 500;
    let mor2_spec_count = 0;
    let mor2_spec_no = 0;
    $(".mor2_next").on("click",function() {
        if(mor2_spec_count < 2)
            mor2_spec_count++;
            mor2_spec_no = mor2_spec_count;
            mor2_spec_pos = 900 * mor2_spec_count;
        $(".mor2_img1").stop().animate({"left": -mor2_spec_pos+"px"}, 100);

        if(mor2_spec_count == 1) {
            $(".mor2_prev").show();
        }
        if(mor2_spec_count == 2) {
            $(".mor2_next").hide();
        }
    });
    $(".mor2_prev").on("click",function() {
        if(mor2_spec_count > 0)
            mor2_spec_count--;
            mor2_spec_no = mor2_spec_count;
            mor2_spec_pos = 900 * mor2_spec_count;
        $(".mor2_img1").stop().animate({"left": -mor2_spec_pos+"px"}, 100);

        if(mor2_spec_count == 0) {
            $(".mor2_prev").hide();
        }
        if(mor2_spec_count == 1) {
            $(".mor2_next").show();
        }
    });

    // 모닝 - 제원 - 휠 < > 클릭시 이미지 이동
    let mor2_spec_pos1 = 500;
    let mor2_spec_count1 = 0;
    let mor2_spec_no1 = 0;
    $(".mor2_next2").on("click",function() {
        if(mor2_spec_count1 < 2)
            mor2_spec_count1++;
            mor2_spec_no1 = mor2_spec_count1;
            mor2_spec_pos1 = 800 * mor2_spec_count1;
        $(".mor2_img2").stop().animate({"left": -mor2_spec_pos1+"px"}, 100);

        if(mor2_spec_count1 == 1) {
            $(".mor2_prev2").show();
        }
        if(mor2_spec_count1 == 2) {
            $(".mor2_next2").hide();
        }
    });
    $(".mor2_prev2").on("click",function() {
        if(mor2_spec_count1 > 0)
            mor2_spec_count1--;
            mor2_spec_no1 = mor2_spec_count1;
            mor2_spec_pos1 = 800 * mor2_spec_count1;
        $(".mor2_img2").stop().animate({"left": -mor2_spec_pos1+"px"}, 100);

        if(mor2_spec_count1 == 0) {
            $(".mor2_prev2").hide();
        }
        if(mor2_spec_count1 == 1) {
            $(".mor2_next2").show();
        }
    });

    //  ====================================================================

    // k5 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".k5_title_btn1").on("click",function() {
        $(".k5").hide();
        $(".k5_1").show();
        $(".k5_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".k5_title_btn2").on("click",function() {
        $(".k5").hide();
        $(".k5_2").show();
        $(".k5_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // k5 - 특징 - 색상(at2)
    $(".k50 li").on("click",function() {
        no=$(this).index();
        $(".k5_at2_color").hide();
        $(".k5_at2_name").hide();
        $(".k5_at2_color"+no).show();
        $(".k5_at2_name"+no).show();
    });

    // k5 - 특징 - 외장(at3)
    $(".k5_at3_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at3 .k5_at3_big").hide();
        $(".k5_at3_big"+no).show();
        $(".k5_at3_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });

    // k5 - 특징 - 내장(at4)
    $(".k5_at4_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at4 .k5_at4_big").hide();
        $(".k5_at4_big"+no).show();
        $(".k5_at4_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });

    // k5 - 특징 - 인터랙티브 기술(at5)
    $(".k5_at5_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at5 .k5_at5_big").hide();
        $(".k5_at5_big"+no).show();
        $(".k5_at5_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });

    // k5 - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".k5_2_spec_btn1").on("click",function() {
        $(".k5_2_spec_2").hide();
        $(".k5_2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".k5_2_spec_btn2").css({"background":"#ccc", "color":"black"});
        $(".k5_2_prev2, .k5_2_next2").hide();
        if(k5_2_spec_count == 0) {
            $(".k5_2_prev").hide();
            $(".k5_2_next").show();
        }
        if(k5_2_spec_count == 1) {
            $(".k5_2_prev").show();
            $(".k5_2_next").show();
        }
        if(k5_2_spec_count == 2) {
            $(".k5_2_prev").show();
            $(".k5_2_next").hide();
        }
    });
    $(".k5_2_spec_btn2").on("click",function() {
        $(".k5_2_spec_1").hide();
        $(".k5_2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".k5_2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".k5_2_prev, .k5_2_next").hide();
        if(k5_2_spec_count1 == 0) {
            $(".k5_2_prev2").hide();
            $(".k5_2_next2").show();
        }
        if(k5_2_spec_count1 == 1) {
            $(".k5_2_prev2").show();
            $(".k5_2_next2").show();
        }
        if(k5_2_spec_count1 == 2) {
            $(".k5_2_prev2").show();
            $(".k5_2_next2").show();
        }
        if(k5_2_spec_count1 == 3) {
            $(".k5_2_prev2").show();
            $(".k5_2_next2").hide();
        }
    });

    // k5 - 제원 - 제원 < > 클릭시 이미지 이동
    let k5_2_spec_pos = 500;
    let k5_2_spec_count = 0;
    let k5_2_spec_no = 0;
    $(".k5_2_next").on("click",function() {
        if(k5_2_spec_count < 2)
            k5_2_spec_count++;
            k5_2_spec_no = k5_2_spec_count;
            k5_2_spec_pos = 900 * k5_2_spec_count;
        $(".k5_2_img1").stop().animate({"left": -k5_2_spec_pos+"px"}, 100);

        if(k5_2_spec_count == 1) {
            $(".k5_2_prev").show();
        }
        if(k5_2_spec_count == 2) {
            $(".k5_2_next").hide();
        }
    });
    $(".k5_2_prev").on("click",function() {
        if(k5_2_spec_count > 0)
            k5_2_spec_count--;
            k5_2_spec_no = k5_2_spec_count;
            k5_2_spec_pos = 900 * k5_2_spec_count;
        $(".k5_2_img1").stop().animate({"left": -k5_2_spec_pos+"px"}, 100);

        if(k5_2_spec_count == 0) {
            $(".k5_2_prev").hide();
        }
        if(k5_2_spec_count == 1) {
            $(".k5_2_next").show();
        }
    });

    // k5 - 제원 - 휠 < > 클릭시 이미지 이동
    let k5_2_spec_pos1 = 500;
    let k5_2_spec_count1 = 0;
    let k5_2_spec_no1 = 0;
    $(".k5_2_next2").on("click",function() {
        if(k5_2_spec_count1 < 3)
            k5_2_spec_count1++;
            k5_2_spec_no1 = k5_2_spec_count1;
            k5_2_spec_pos1 = 600 * k5_2_spec_count1;
        $(".k5_2_img2").stop().animate({"left": -k5_2_spec_pos1+"px"}, 100);

        if(k5_2_spec_count1 == 1) {
            $(".k5_2_prev2").show();
        }
        if(k5_2_spec_count1 == 3) {
            $(".k5_2_next2").hide();
        }
    });
    $(".k5_2_prev2").on("click",function() {
        if(k5_2_spec_count1 > 0)
            k5_2_spec_count1--;
            k5_2_spec_no1 = k5_2_spec_count1;
            k5_2_spec_pos1 = 600 * k5_2_spec_count1;
        $(".k5_2_img2").stop().animate({"left": -k5_2_spec_pos1+"px"}, 100);

        if(k5_2_spec_count1 == 0) {
            $(".k5_2_prev2").hide();
        }
        if(k5_2_spec_count1 == 2) {
            $(".k5_2_next2").show();
        }
    });

    //  ====================================================================

    // sorento - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".sorento_title_btn1").on("click",function() {
        $(".sorento").hide();
        $(".sorento_1").show();
        $(".sorento_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".sorento_title_btn2").on("click",function() {
        $(".sorento").hide();
        $(".sorento_2").show();
        $(".sorento_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // sorento - 특징 - 색상(at2)
    $(".sorento0 li").on("click",function() {
        no=$(this).index();
        $(".sorento_at2_color").hide();
        $(".sorento_at2_name").hide();
        $(".sorento_at2_color"+no).show();
        $(".sorento_at2_name"+no).show();
    });

    // sorento - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".sorento_2_spec_btn1").on("click",function() {
        $(".sorento_2_spec_2").hide();
        $(".sorento_2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".sorento_2_spec_btn2").css({"background":"#ccc", "color":"black"});
        $(".sorento_2_prev2, .sorento_2_next2").hide();
        if(sorento_2_spec_count == 0) {
            $(".sorento_2_prev").hide();
            $(".sorento_2_next").show();
        }
        if(sorento_2_spec_count == 1) {
            $(".sorento_2_prev").show();
            $(".sorento_2_next").show();
        }
        if(sorento_2_spec_count == 2) {
            $(".sorento_2_prev").show();
            $(".sorento_2_next").hide();
        }
    });
    $(".sorento_2_spec_btn2").on("click",function() {
        $(".sorento_2_spec_1").hide();
        $(".sorento_2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".sorento_2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".sorento_2_prev, .sorento_2_next").hide();
        if(sorento_2_spec_count1 == 0) {
            $(".sorento_2_prev2").hide();
            $(".sorento_2_next2").show();
        }
        if(sorento_2_spec_count1 == 1) {
            $(".sorento_2_prev2").show();
            $(".sorento_2_next2").hide();
        }
    });

    // sorento - 제원 - 제원 < > 클릭시 이미지 이동
    let sorento_2_spec_pos = 500;
    let sorento_2_spec_count = 0;
    let sorento_2_spec_no = 0;
    $(".sorento_2_next").on("click",function() {
        if(sorento_2_spec_count < 2)
            sorento_2_spec_count++;
            sorento_2_spec_no = sorento_2_spec_count;
            sorento_2_spec_pos = 900 * sorento_2_spec_count;
        $(".sorento_2_img1").stop().animate({"left": -sorento_2_spec_pos+"px"}, 100);

        if(sorento_2_spec_count == 1) {
            $(".sorento_2_prev").show();
        }
        if(sorento_2_spec_count == 2) {
            $(".sorento_2_next").hide();
        }
    });
    $(".sorento_2_prev").on("click",function() {
        if(sorento_2_spec_count > 0)
            sorento_2_spec_count--;
            sorento_2_spec_no = sorento_2_spec_count;
            sorento_2_spec_pos = 900 * sorento_2_spec_count;
        $(".sorento_2_img1").stop().animate({"left": -sorento_2_spec_pos+"px"}, 100);

        if(sorento_2_spec_count == 0) {
            $(".sorento_2_prev").hide();
        }
        if(sorento_2_spec_count == 1) {
            $(".sorento_2_next").show();
        }
    });

    // sorento - 제원 - 휠 < > 클릭시 이미지 이동
    let sorento_2_spec_pos1 = 500;
    let sorento_2_spec_count1 = 0;
    let sorento_2_spec_no1 = 0;
    $(".sorento_2_next2").on("click",function() {
        if(sorento_2_spec_count1 < 1)
        sorento_2_spec_count1++;
        sorento_2_spec_no1 = sorento_2_spec_count1;
            sorento_2_spec_pos1 = 800 * sorento_2_spec_count1;
        $(".sorento_2_img2").stop().animate({"left": -sorento_2_spec_pos1+"px"}, 100);

        if(sorento_2_spec_count1 == 1) {
            $(".sorento_2_prev2").show();
        }
        if(sorento_2_spec_count1 == 1) {
            $(".sorento_2_next2").hide();
        }
    });
    $(".sorento_2_prev2").on("click",function() {
        if(sorento_2_spec_count1 > 0)
        sorento_2_spec_count1--;
        sorento_2_spec_no1 = sorento_2_spec_count1;
            sorento_2_spec_pos1 = 800 * sorento_2_spec_count1;
        $(".sorento_2_img2").stop().animate({"left": -sorento_2_spec_pos1+"px"}, 100);

        if(sorento_2_spec_count1 == 0) {
            $(".sorento_2_prev2").hide();
        }
        if(sorento_2_spec_count1 == 0) {
            $(".sorento_2_next2").show();
        }
    });

    //  ====================================================================

    // 니로 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".niro_title_btn1").on("click",function() {
        $(".niro").hide();
        $(".niro_1").show();
        $(".niro_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".niro_title_btn2").on("click",function() {
        $(".niro").hide();
        $(".niro_2").show();
        $(".niro_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // 니로 - 특징 - 색상(at2)
    $(".niro0 li").on("click",function() {
        no=$(this).index();
        $(".niro_at2_color").hide();
        $(".niro_at2_name").hide();
        $(".niro_at2_color"+no).show();
        $(".niro_at2_name"+no).show();
    });

    // 니로 - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".niro_2_spec_btn1").on("click",function() {
        $(".niro_2_spec_2").hide();
        $(".niro_2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".niro_2_spec_btn2").css({"background":"#ccc", "color":"black"});
        $(".niro_2_prev2, .niro_2_next2").hide();
        if(niro2_spec_count == 0) {
            $(".niro_2_prev").hide();
            $(".niro_2_next").show();
        }
        if(niro2_spec_count == 1) {
            $(".niro_2_prev").show();
            $(".niro_2_next").show();
        }
        if(niro2_spec_count == 2) {
            $(".niro_2_prev").show();
            $(".niro_2_next").hide();
        }
    });
    $(".niro_2_spec_btn2").on("click",function() {
        $(".niro_2_spec_1").hide();
        $(".niro_2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".niro_2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".niro_2_prev, .niro_2_next").hide();
        if(niro2_spec_count1 == 0) {
            $(".niro_2_prev2").hide();
            $(".niro_2_next2").show();
        }
        if(niro2_spec_count1 == 1) {
            $(".niro_2_prev2").show();
            $(".niro_2_next2").show();
        }
        if(niro2_spec_count1 == 2) {
            $(".niro_2_prev2").show();
            $(".niro_2_next2").hide();
        }
    });

    // 니로 - 제원 - 제원 < > 클릭시 이미지 이동
    let niro2_spec_pos = 500;
    let niro2_spec_count = 0;
    let niro2_spec_no = 0;
    $(".niro_2_next").on("click",function() {
        if(niro2_spec_count < 2)
            niro2_spec_count++;
            niro2_spec_no = niro2_spec_count;
            niro2_spec_pos = 900 * niro2_spec_count;
        $(".niro_2_img1").stop().animate({"left": -niro2_spec_pos+"px"}, 100);

        if(niro2_spec_count == 1) {
            $(".niro_2_prev").show();
        }
        if(niro2_spec_count == 2) {
            $(".niro_2_next").hide();
        }
    });
    $(".niro_2_prev").on("click",function() {
        if(niro2_spec_count > 0)
            niro2_spec_count--;
            niro2_spec_no = niro2_spec_count;
            niro2_spec_pos = 900 * niro2_spec_count;
        $(".niro_2_img1").stop().animate({"left": -niro2_spec_pos+"px"}, 100);

        if(niro2_spec_count == 0) {
            $(".niro_2_prev").hide();
        }
        if(niro2_spec_count == 1) {
            $(".niro_2_next").show();
        }
    });

    // 니로 - 제원 - 휠 < > 클릭시 이미지 이동
    let niro2_spec_pos1 = 500;
    let niro2_spec_count1 = 0;
    let niro2_spec_no1 = 0;
    $(".niro_2_next2").on("click",function() {
        if(niro2_spec_count1 < 2)
            niro2_spec_count1++;
            niro2_spec_no1 = niro2_spec_count1;
            niro2_spec_pos1 = 600 * niro2_spec_count1;
        $(".niro_2_img2").stop().animate({"left": -niro2_spec_pos1+"px"}, 100);

        if(niro2_spec_count1 == 1) {
            $(".niro_2_prev2").show();
        }
        if(niro2_spec_count1 == 2) {
            $(".niro_2_next2").hide();
        }
    });
    $(".niro_2_prev2").on("click",function() {
        if(niro2_spec_count1 > 0)
            niro2_spec_count1--;
            niro2_spec_no1 = niro2_spec_count1;
            niro2_spec_pos1 = 600 * niro2_spec_count1;
        $(".niro_2_img2").stop().animate({"left": -niro2_spec_pos1+"px"}, 100);

        if(niro2_spec_count1 == 0) {
            $(".niro_2_prev2").hide();
        }
        if(niro2_spec_count1 == 1) {
            $(".niro_2_next2").show();
        }
    });

    //  ====================================================================

    // 셀토스 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".seltos_title_btn1").on("click",function() {
        $(".seltos").hide();
        $(".seltos_1").show();
        $(".seltos_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".seltos_title_btn2").on("click",function() {
        $(".seltos").hide();
        $(".seltos_2").show();
        $(".seltos_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // 셀토스 - 특징 - 색상(at2)
    $(".seltos0 li").on("click",function() {
        no=$(this).index();
        $(".seltos_at2_color").hide();
        $(".seltos_at2_name").hide();
        $(".seltos_at2_color"+no).show();
        $(".seltos_at2_name"+no).show();
    });

    // 셀토스 - 특징 - 외장(at4)
    $(".seltos_at4_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at4 .seltos_at4_big").hide();
        $(".seltos_at4_big"+no).show();
        $(".seltos_at4_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });

    // 셀토스 - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".seltos2_spec_btn1").on("click",function() {
        $(".seltos2_spec_2").hide();
        $(".seltos2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".seltos2_spec_btn2").css({"background":"#ccc", "color":"black"});
        $(".seltos2_prev2, .seltos2_next2").hide();
        if(seltos2_spec_count == 0) {
            $(".seltos2_prev").hide();
            $(".seltos2_next").show();
        }
        if(seltos2_spec_count == 1) {
            $(".seltos2_prev").show();
            $(".seltos2_next").show();
        }
        if(seltos2_spec_count == 2) {
            $(".seltos2_prev").show();
            $(".seltos2_next").hide();
        }
    });
    $(".seltos2_spec_btn2").on("click",function() {
        $(".seltos2_spec_1").hide();
        $(".seltos2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".seltos2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".seltos2_prev, .seltos2_next").hide();
        if(seltos2_spec_count == 0) {
            $(".seltos2_prev2").hide();
            $(".seltos2_next2").show();
        }
        if(seltos2_spec_count == 1) {
            $(".seltos2_prev2").show();
            $(".seltos2_next2").show();
        }
        if(seltos2_spec_count == 2) {
            $(".seltos2_prev2").show();
            $(".seltos2_next2").hide();
        }
    });

    // 셀토스 - 제원 - 제원 < > 클릭시 이미지 이동
    let seltos2_spec_pos = 500;
    let seltos2_spec_count = 0;
    let seltos2_spec_no = 0;
    $(".seltos2_next").on("click",function() {
        if(seltos2_spec_count < 2)
            seltos2_spec_count++;
            seltos2_spec_no = seltos2_spec_count;
            seltos2_spec_pos = 900 * seltos2_spec_count;
        $(".seltos2_img1").stop().animate({"left": -seltos2_spec_pos+"px"}, 100);

        if(seltos2_spec_count == 1) {
            $(".seltos2_prev").show();
        }
        if(seltos2_spec_count == 2) {
            $(".seltos2_next").hide();
        }
    });
    $(".seltos2_prev").on("click",function() {
        if(seltos2_spec_count > 0)
            seltos2_spec_count--;
            seltos2_spec_no = seltos2_spec_count;
            seltos2_spec_pos = 900 * seltos2_spec_count;
        $(".seltos2_img1").stop().animate({"left": -seltos2_spec_pos+"px"}, 100);

        if(seltos2_spec_count == 0) {
            $(".seltos2_prev").hide();
        }
        if(seltos2_spec_count == 1) {
            $(".seltos2_next").show();
        }
    });

    // 셀토스 - 제원 - 휠 < > 클릭시 이미지 이동
    let seltos2_spec_pos1 = 500;
    let seltos2_spec_count1 = 0;
    let seltos2_spec_no1 = 0;
    $(".seltos2_next2").on("click",function() {
        if(seltos2_spec_count1 < 2)
            seltos2_spec_count1++;
            seltos2_spec_no1 = seltos2_spec_count1;
            seltos2_spec_pos1 = 800 * seltos2_spec_count1;
        $(".seltos2_img2").stop().animate({"left": -seltos2_spec_pos1+"px"}, 100);

        if(seltos2_spec_count1 == 1) {
            $(".seltos2_prev2").show();
        }
        if(seltos2_spec_count1 == 2) {
            $(".seltos2_next2").hide();
        }
    });
    $(".seltos2_prev2").on("click",function() {
        if(seltos2_spec_count1 > 0)
            seltos2_spec_count1--;
            seltos2_spec_no1 = seltos2_spec_count1;
            seltos2_spec_pos1 = 800 * seltos2_spec_count1;
        $(".seltos2_img2").stop().animate({"left": -seltos2_spec_pos1+"px"}, 100);

        if(seltos2_spec_count1 == 0) {
            $(".seltos2_prev2").hide();
        }
        if(seltos2_spec_count1 == 1) {
            $(".seltos2_next2").show();
        }
    });

    //  ====================================================================

    // 모하비 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".mohave_title_btn1").on("click",function() {
        $(".mohave").hide();
        $(".mohave_1").show();
        $(".mohave_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".mohave_title_btn2").on("click",function() {
        $(".mohave").hide();
        $(".mohave_2").show();
        $(".mohave_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // 모하비 - 특징 - 색상(at2)
    $(".mohave0 li").on("click",function() {
        no=$(this).index();
        $(".mohave_at2_color").hide();
        $(".mohave_at2_name").hide();
        $(".mohave_at2_color"+no).show();
        $(".mohave_at2_name"+no).show();
    });

    // 모하비 - 특징 - 외장(at4)
    $(".mohave_at4_btn1").on("click",function() {
        no=$(this).index()+1;
        $(".at4 .mohave_at4_big").hide();
        $(".mohave_at4_big"+no).show();
        $(".mohave_at4_btn1").css("border","3px solid #ccc");
        $(this).css("border","3px solid #05141f");
    });


    // 모하비 - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".mohave_2_spec_btn1").on("click",function() {
        $(".mohave_2_spec_2").hide();
        $(".mohave_2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".mohave_2_spec_btn2").css({"background":"#ccc", "color":"black"});
        $(".mohave_2_prev2, .mohave_2_next2").hide();
        if(mohave_2_spec_count == 0) {
            $(".mohave_2_prev").hide();
            $(".mohave_2_next").show();
        }
        if(mohave_2_spec_count == 1) {
            $(".mohave_2_prev").show();
            $(".mohave_2_next").show();
        }
        if(mohave_2_spec_count == 2) {
            $(".mohave_2_prev").show();
            $(".mohave_2_next").hide();
        }
    });
    $(".mohave_2_spec_btn2").on("click",function() {
        $(".mohave_2_spec_1").hide();
        $(".mohave_2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".mohave_2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".mohave_2_prev, .mohave_2_next").hide();
        if(mohave_2_spec_count == 0) {
            $(".mohave_2_prev2").hide();
            $(".mohave_2_next2").show();
        }
        if(mohave_2_spec_count == 1) {
            $(".mohave_2_prev2").show();
            $(".mohave_2_next2").hide();
        }
    });

    // 모하비 - 제원 - 제원 < > 클릭시 이미지 이동
    let mohave_2_spec_pos = 500;
    let mohave_2_spec_count = 0;
    let mohave_2_spec_no = 0;
    $(".mohave_2_next").on("click",function() {
        if(mohave_2_spec_count < 2)
            mohave_2_spec_count++;
            mohave_2_spec_no = mohave_2_spec_count;
            mohave_2_spec_pos = 900 * mohave_2_spec_count;
        $(".mohave_2_img1").stop().animate({"left": -mohave_2_spec_pos+"px"}, 100);

        if(mohave_2_spec_count == 1) {
            $(".mohave_2_prev").show();
        }
        if(mohave_2_spec_count == 2) {
            $(".mohave_2_next").hide();
        }
    });
    $(".mohave_2_prev").on("click",function() {
        if(mohave_2_spec_count > 0)
            mohave_2_spec_count--;
            mohave_2_spec_no = mohave_2_spec_count;
            mohave_2_spec_pos = 900 * mohave_2_spec_count;
        $(".mohave_2_img1").stop().animate({"left": -mohave_2_spec_pos+"px"}, 100);

        if(mohave_2_spec_count == 0) {
            $(".mohave_2_prev").hide();
        }
        if(mohave_2_spec_count == 1) {
            $(".mohave_2_next").show();
        }
    });

    // 모하비 - 제원 - 휠 < > 클릭시 이미지 이동
    let mohave_2_spec_pos1 = 500;
    let mohave_2_spec_count1 = 0;
    let mohave_2_spec_no1 = 0;
    $(".mohave_2_next2").on("click",function() {
        if(mohave_2_spec_count1 < 1)
            mohave_2_spec_count1++;
            mohave_2_spec_no1 = mohave_2_spec_count1;
            mohave_2_spec_pos1 = 800 * mohave_2_spec_count1;
        $(".mohave_2_img2").stop().animate({"left": -mohave_2_spec_pos1+"px"}, 100);

        if(mohave_2_spec_count1 == 1) {
            $(".mohave_2_prev2").show();
        }
        if(mohave_2_spec_count1 == 1) {
            $(".mohave_2_next2").hide();
        }
    });
    $(".mohave_2_prev2").on("click",function() {
        if(mohave_2_spec_count1 > 0)
            mohave_2_spec_count1--;
            mohave_2_spec_no1 = mohave_2_spec_count1;
            mohave_2_spec_pos1 = 800 * mohave_2_spec_count1;
        $(".mohave_2_img2").stop().animate({"left": -mohave_2_spec_pos1+"px"}, 100);

        if(mohave_2_spec_count1 == 0) {
            $(".mohave_2_prev2").hide();
        }
        if(mohave_2_spec_count1 == 0) {
            $(".mohave_2_next2").show();
        }
    });

    //  ====================================================================

    // 봉고3 트럭 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".bonggo3_title_btn1").on("click",function() {
        $(".bonggo3").hide();
        $(".bonggo3_1").show();
        $(".bonggo3_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".bonggo3_title_btn2").on("click",function() {
        $(".bonggo3").hide();
        $(".bonggo3_2").show();
        $(".bonggo3_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // 봉고3 트럭 - 제원 - (제원 / 휠) 버튼 클릭시 해당 화면 노출
    $(".bonggo3_2_spec_btn1").on("click",function() {
        $(".bonggo3_2_spec_2").hide();
        $(".bonggo3_2_spec_1").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".bonggo3_2_spec_btn2").css({"background":"#ccc", "color":"black"});
        if(bonggo3_2_spec_count == 0) {
            $(".bonggo3_2_prev").hide();
            $(".bonggo3_2_next").show();
        }
        if(bonggo3_2_spec_count == 1) {
            $(".bonggo3_2_prev").show();
            $(".bonggo3_2_next").show();
        }
        if(bonggo3_2_spec_count == 2) {
            $(".bonggo3_2_prev").show();
            $(".bonggo3_2_next").hide();
        }
    });
    $(".bonggo3_2_spec_btn2").on("click",function() {
        $(".bonggo3_2_spec_1").hide();
        $(".bonggo3_2_spec_2").show();
        $(this).css({"background":"#05141f", "color":"white"});
        $(".bonggo3_2_spec_btn1").css({"background":"#ccc", "color":"black"});
        $(".bonggo3_2_prev, .bonggo3_2_next").hide();
    });

    // 봉고3 트럭 - 제원 - 제원 < > 클릭시 이미지 이동
    let bonggo3_2_spec_pos = 500;
    let bonggo3_2_spec_count = 0;
    let bonggo3_2_spec_no = 0;
    $(".bonggo3_2_next").on("click",function() {
        if(bonggo3_2_spec_count < 2)
            bonggo3_2_spec_count++;
            bonggo3_2_spec_no = bonggo3_2_spec_count;
            bonggo3_2_spec_pos = 900 * bonggo3_2_spec_count;
        $(".bonggo3_2_img1").stop().animate({"left": -bonggo3_2_spec_pos+"px"}, 100);

        if(bonggo3_2_spec_count == 1) {
            $(".bonggo3_2_prev").show();
        }
        if(bonggo3_2_spec_count == 2) {
            $(".bonggo3_2_next").hide();
        }
    });
    $(".bonggo3_2_prev").on("click",function() {
        if(bonggo3_2_spec_count > 0)
            bonggo3_2_spec_count--;
            bonggo3_2_spec_no = bonggo3_2_spec_count;
            bonggo3_2_spec_pos = 900 * bonggo3_2_spec_count;
        $(".bonggo3_2_img1").stop().animate({"left": -bonggo3_2_spec_pos+"px"}, 100);

        if(bonggo3_2_spec_count == 0) {
            $(".bonggo3_2_prev").hide();
        }
        if(bonggo3_2_spec_count == 1) {
            $(".bonggo3_2_next").show();
        }
    });

    //  ====================================================================

    // k8택시 - 타이틀 - 버튼 클릭시 해당 화면으로 이동
    $(".k8_taxi_title_btn1").on("click",function() {
        $(".k8_taxi").hide();
        $(".k8_taxi_1").show();
        $(".k8_taxi_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });
    $(".k8_taxi_title_btn2").on("click",function() {
        $(".k8_taxi").hide();
        $(".k8_taxi_2").show();
        $(".k8_taxi_title_btn").css({"border":"none", "color":"#898989"});
        $(this).css({"color":"white", "borderBottom":"5px solid white"});
        top_func();
    });

    // k8택시 - 제원 - 제원 < > 클릭시 이미지 이동
    let k8_taxi_2_spec_pos = 500;
    let k8_taxi_2_spec_count = 0;
    let k8_taxi_2_spec_no = 0;
    $(".k8_taxi_2_next").on("click",function() {
        if(k8_taxi_2_spec_count < 2)
            k8_taxi_2_spec_count++;
            k8_taxi_2_spec_no = k8_taxi_2_spec_count;
            k8_taxi_2_spec_pos = 900 * k8_taxi_2_spec_count;
        $(".k8_taxi_2_img1").stop().animate({"left": -k8_taxi_2_spec_pos+"px"}, 100);

        if(k8_taxi_2_spec_count == 1) {
            $(".k8_taxi_2_prev").show();
        }
        if(k8_taxi_2_spec_count == 2) {
            $(".k8_taxi_2_next").hide();
        }
    });
    $(".k8_taxi_2_prev").on("click",function() {
        if(k8_taxi_2_spec_count > 0)
            k8_taxi_2_spec_count--;
            k8_taxi_2_spec_no = k8_taxi_2_spec_count;
            k8_taxi_2_spec_pos = 900 * k8_taxi_2_spec_count;
        $(".k8_taxi_2_img1").stop().animate({"left": -k8_taxi_2_spec_pos+"px"}, 100);

        if(k8_taxi_2_spec_count == 0) {
            $(".k8_taxi_2_prev").hide();
        }
        if(k8_taxi_2_spec_count == 1) {
            $(".k8_taxi_2_next").show();
        }
    });


















    

});


//=========================== ((차량)) 함수 시작 ============================
// 모닝 - 특징 - 스크롤 값에 따른 효과
function scr_car() {
    if(mor_pos>50) {
        $(".mor_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(mor_pos>10800) {
        $(".mor_at10_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".mor_at10_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(mor_pos>11300) {
        $(".mor_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".mor_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// k5 - 특징 - 스크롤 값에 따른 효과
function scr_car2() {
    if(k5_pos>50) {
        $(".k5_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(k5_pos>7764) {
        $(".k5_at7_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".k5_at7_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(k5_pos>8400) {
        $(".k5_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".k5_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// sorento - 특징 - 스크롤 값에 따른 효과
function scr_car3() {
    if(sorento_pos>50) {
        $(".sorento_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(sorento_pos>6757) {
        $(".sorento_at7_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".sorento_at7_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(sorento_pos>7457) {
        $(".sorento_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".sorento_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// niro - 특징 - 스크롤 값에 따른 효과
function scr_car4() {
    if(niro_pos>50) {
        $(".niro_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(niro_pos>10242) {
        $(".niro_at10_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".niro_at10_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(niro_pos>10900) {
        $(".niro_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".niro_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// seltos - 특징 - 스크롤 값에 따른 효과
function scr_car5() {
    if(seltos_pos>50) {
        $(".seltos_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(seltos_pos>11160) {
        $(".seltos_at10_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".seltos_at10_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(seltos_pos>11770) {
        $(".seltos_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".seltos_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// mohave - 특징 - 스크롤 값에 따른 효과
function scr_car6() {
    if(mohave_pos>50) {
        $(".mohave_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(mohave_pos>12010) {
        $(".mohave_at10_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".mohave_at10_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(mohave_pos>12700) {
        $(".mohave_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".mohave_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// bonggo3 - 특징 - 스크롤 값에 따른 효과
function scr_car7() {
    if(bonggo3_pos>50) {
        $(".bonggo3_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(bonggo3_pos>5290) {
        $(".bonggo3_at6_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".bonggo3_at6_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(bonggo3_pos>6050) {
        $(".bonggo3_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".bonggo3_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};


// k8_taxi - 특징 - 스크롤 값에 따른 효과
function scr_car8() {
    if(k8_taxi_pos>50) {
        $(".k8_taxi_pc_menu").stop().animate({"right":"15px"}, 500);
    }
    if(k8_taxi_pos>4400) {
        $(".k8_taxi_at6_img").stop().animate({"left":"50%"},400,"swing",function(){
        }); 
    }
    else {
        $(".k8_taxi_at6_img").stop().animate({"left":"120%"},400,function(){
        }); 
    }; 
    if(k8_taxi_pos>5100) {
        $(".k8_taxi_pc_menu").css({"opacity":0},function(){
        }); 
    }
    else {
        $(".k8_taxi_pc_menu").css({"opacity":"100%"},400,function(){
        }); 
    }; 
};






























