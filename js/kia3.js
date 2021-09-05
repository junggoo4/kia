// ★★★★ 구매정보 메뉴에 해당되는 화면 js ★★★★

// Header, footer 연결
$(function() {
    $(".header2").load("header2.html");
    $(".footer").load("footer.html");
});


let price;
const opt = {
    "optionA" : ["서울","인천","경기","강원","충북","대전","충남","전북","광주","전남","대구","경북","부산","경남","울산","제주"]
}

window.onload = function() {
    for(i=0; i<opt.optionA.length; i++) {
        $("#sel option:eq("+i+")").html(opt.optionA[i]);
        $("#sel1 option:eq("+i+")").html(opt.optionA[i]);
        $("#sel2 option:eq("+i+")").html(opt.optionA[i]);
        $("#sel3 option:eq("+i+")").html(opt.optionA[i]);
        $("#sel4 option:eq("+i+")").html(opt.optionA[i]);
        $("#sel5 option:eq("+i+")").html(opt.optionA[i]);
    };
};

// 공통(새로고침시 무조건 스크롤 올리기)
function top_func() {
    $("html, body").animate({"scrollTop":0}, 500);
};


$(function() {
    // 온라인 견적=================================================================
    // 모닝 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_1> li:eq(0)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_morning").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".mor_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
    });
    // 모바일) 모닝 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_m> li:eq(0)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_morning").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".mor_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        top_func();
    });

    // 모닝 - 상세차종 선택 - 모델, 상세차종 선택
    $(".mor_btn1_1").on("click",function() {
        $(".mor_btn1_2").css({"background":"white", "color":"#05141f"});
        $(".mor_btn1_1").css({"background":"#05141f", "color":"white"});
    });
    $(".mor_btn1_2").on("click",function() {
        $(".mor_btn1_1").css({"background":"white", "color":"#05141f"});
        $(".mor_btn1_2").css({"background":"#05141f", "color":"white"});
    });
    
    $(".mor_btn li").on("click",function() {
        no=$(this).index()+1;
        $(".mor_btn2").css({"background":"white", "color":"#05141f"});
        $(".mor_btn2_"+no).css({"background":"#05141f", "color":"white"});
        $(".morning_total").hide();
        $(".morning_total"+no).show();

        if(no==1)
            price = "11,750,000원";
        else if(no==2)
            price = "12,050,000원";
        else if(no==3)
            price = "13,550,000원";
        else if(no==4)
            price = "15,200,000원";
        final = price;
        $(".final").html(price);
    });
    
    // 모닝 - 컬러 선택 
    $(".mor_color_btn li").on("click",function() {
        no=$(this).index();
        $(".mor_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".mor_color li").hide();
        $(".mor_color li:eq("+no+")").show();
    });
    // 모바일) 모닝 - 컬러 선택 
    $(".chepter2_m> .mor_color_btn> li").on("click",function() {
        no=$(this).index();
        $(".chepter2_m> .mor_color_btn> li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".chepter2_m> .mor_color> li").hide();
        $(".chepter2_m> .mor_color> li:eq("+no+")").show();
    });

    // 모닝 - 옵션 선택 
    $(".opsion li").on("click",function() {
        $(this).toggleClass("on");
    });

    // 모닝 - 구매 방법
    $(".money_btn li").on("click",function() {
        no=$(this).index();
        $(".money_btn li").css({"background":"none", "color":"#05141f"});
        $(".money_btn li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".halbu_btn").on("click",function() {
        $(".halbu, .halbu_list").show();
    });
    $(".money_btn li:eq(0)").on("click",function() {
        $(".halbu, .halbu_list").hide();
    });
    $(".halbu_list li").on("click",function() {
        no=$(this).index();
        $(".halbu_list li").css({"background":"none", "color":"#05141f"});
        $(".halbu_list li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".money_btn2 li").on("click",function() {
        no=$(this).index();
        $(".money_btn2 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn2 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });

    // 모닝 - 최종 팝업창
    $(".back_btn").on("click",function() {
        $(".chepter").hide();
        $(".chepter4").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
    });

    // 모닝 - 하단 - 이전 다음 버튼 클릭시 해당 화면으로 이동
   let mor_count =0;
    $(".mor_prev").on("click",function() {
        if(mor_count == 0){
            $(".car").hide();
            $(".chepter").hide();
            $(".car_total").hide();
            $(".menu2_1_bm").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(0)").css({"background":"#05141f", "color":"white"});
        }
        if(mor_count == 1){
            $(".chepter").hide();
            $(".chepter1").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        }
        if(mor_count == 2){
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        }
        if(mor_count == 3){
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        }
        mor_count--;
        if(mor_count < 0) {
           mor_count = 0;
        }
        top_func();
    });
    $(".mor_next").on("click",function() {   
        if(mor_count == 0) {
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        };
        if(mor_count == 1) {
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        };
        if(mor_count == 2) {
            $(".chepter").hide();
            $(".chepter4").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        if(mor_count == 3) {
            $(".chepter").hide();
            $(".chepter5").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        mor_count++;
        if(mor_count > 2) {
            mor_count = 3;
        }
        top_func();
    });



    // K5 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_1> li:eq(1)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_k5").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".k_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
    });
    // 모바일) K5 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_m> li:eq(1)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_k5").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".k_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        top_func();
    });

    // K5 - 상세차종 선택 - 모델, 상세차종 선택
    $(".k5_btn1_1").on("click",function() {
        $(".k5_btn1_2").css({"background":"white", "color":"#05141f"});
        $(".k5_btn1_3").css({"background":"white", "color":"#05141f"});
        $(".k5_btn1_1").css({"background":"#05141f", "color":"white"});
    });
    $(".k5_btn1_2").on("click",function() {
        $(".k5_btn1_1").css({"background":"white", "color":"#05141f"});
        $(".k5_btn1_3").css({"background":"white", "color":"#05141f"});
        $(".k5_btn1_2").css({"background":"#05141f", "color":"white"});
    });
    $(".k5_btn1_3").on("click",function() {
        $(".k5_btn1_1").css({"background":"white", "color":"#05141f"});
        $(".k5_btn1_2").css({"background":"white", "color":"#05141f"});
        $(".k5_btn1_3").css({"background":"#05141f", "color":"white"});
    });
    
    $(".k5_btn> li").on("click",function() {
        no=$(this).index()+1;
        $(".k5_btn2").css({"background":"white", "color":"#05141f"});
        $(".k5_btn2_"+no).css({"background":"#05141f", "color":"white"});
        $(".k5_total").hide();
        $(".k5_total"+no).show();

        if(no==1)
            price = "24,250,000원";
        else if(no==2)
            price = "26,800,000원";
        else if(no==3)
            price = "28,750,000원";
        else if(no==4)
            price = "31,500,000원";
        final = price;
        $(".final").html(price);
    });

    // K5 - 컬러 선택 
    $(".k5_color_btn li").on("click",function() {
        no=$(this).index();
        $(".k5_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".k5_color li").hide();
        $(".k5_color li:eq("+no+")").show();
    });
    // 모바일) K5 - 컬러 선택
    $(".chepter2_m> .k5_color_btn> li").on("click",function() {
        no=$(this).index();
        $(".chepter2_m> .k5_color_btn> li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".chepter2_m> .k5_color> li").hide();
        $(".chepter2_m> .k5_color> li:eq("+no+")").show();
    });

    // K5 - 옵션 선택 
    $(".opsion1 li").on("click",function() {
        $(this).toggleClass("on1");
    });
    $(".opsion2 li").on("click",function() {
        $(this).toggleClass("on2");
    });

    // K5 - 구매 방법
    $(".money_btn3 li").on("click",function() {
        no=$(this).index();
        $(".money_btn3 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn3 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".halbu_btn1").on("click",function() {
        $(".halbu1").show();
        $(".halbu_list1").show();
    });
    $(".money_btn3 li:eq(0)").on("click",function() {
        $(".halbu1").hide();
        $(".halbu_list1").hide();
    });
    $(".halbu_list1 li").on("click",function() {
        no=$(this).index();
        $(".halbu_list1 li").css({"background":"none", "color":"#05141f"});
        $(".halbu_list1 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".money_btn4 li").on("click",function() {
        no=$(this).index();
        $(".money_btn4 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn4 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });

    // K5 - 하단 - 이전 다음 버튼 클릭시 해당 화면으로 이동
    let k5_count =0;
    $(".k5_prev").on("click",function() {
        if(k5_count == 0){
           $(".car").hide();
           $(".chepter").hide();
           $(".car_total").hide();
           $(".menu2_1_bm").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(0)").css({"background":"#05141f", "color":"white"});
        }
        if(k5_count == 1){
           $(".chepter").hide();
           $(".chepter1").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        }
        if(k5_count == 2){
           $(".chepter").hide();
           $(".chepter2").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        }
        if(k5_count == 3){
           $(".chepter").hide();
           $(".chepter3").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        }
       k5_count--;
       if(k5_count < 0) {
            k5_count = 0;
       }
       top_func();
    });
    $(".k5_next").on("click",function() {   
       if(k5_count == 0) {
           $(".chepter").hide();
           $(".chepter2").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
       };
       if(k5_count == 1) {
           $(".chepter").hide();
           $(".chepter3").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
       };
       if(k5_count == 2) {
           $(".chepter").hide();
           $(".chepter4").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
       };
       if(k5_count == 3) {
           $(".chepter").hide();
           $(".chepter5").show();
           $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
           $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
       };
       k5_count++;
       if(k5_count > 2) {
            k5_count = 3;
       }
       top_func();
    });



    // 니로 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_1> li:eq(2)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_niro").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".ni_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
    });
    // 모바일) 니로 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_m> li:eq(2)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_niro").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".ni_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        top_func();
    });

    // 니로 - 상세차종 선택 - 모델, 상세차종 선택  
    $(".niro_btn> li").on("click",function() {
        no=$(this).index()+1;
        $(".niro_btn2").css({"background":"white", "color":"#05141f"});
        $(".niro_btn2_"+no).css({"background":"#05141f", "color":"white"});
        $(".niro_total").hide();
        $(".niro_total"+no).show();

        if(no==1)
            price = "25,980,000원";
        else if(no==2)
            price = "27,780,000원";
        else if(no==3)
            price = "30,130,000원";
        else if(no==4)
            price = "32,130,000원";
        final = price;
        $(".final").html(price);
    });   

    // 니로 - 컬러 선택 
    $(".niro_color_btn li").on("click",function() {
        no=$(this).index();
        $(".niro_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".niro_color li").hide();
        $(".niro_color li:eq("+no+")").show();
    });
    // 모바일) 니로 - 컬러 선택
    $(".chepter2_m> .niro_color_btn> li").on("click",function() {
        no=$(this).index();
        $(".chepter2_m> .niro_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".chepter2_m> .niro_color li").hide();
        $(".chepter2_m> .niro_color li:eq("+no+")").show();
    });

    // 니로 - 구매 방법
    $(".money_btn5 li").on("click",function() {
        no=$(this).index();
        $(".money_btn5 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn5 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".halbu_btn2").on("click",function() {
        $(".halbu2, .halbu_list2").show();
    });
    $(".money_btn5 li:eq(0)").on("click",function() {
        $(".halbu2, .halbu_list2").hide();
    });
    $(".halbu_list2 li").on("click",function() {
        no=$(this).index();
        $(".halbu_list2 li").css({"background":"none", "color":"#05141f"});
        $(".halbu_list2 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".money_btn6 li").on("click",function() {
        no=$(this).index();
        $(".money_btn6 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn6 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });

    // 니로 - 하단 - 이전 다음 버튼 클릭시 해당 화면으로 이동
    let niro_count =0;
    $(".niro_prev").on("click",function() {
        if(niro_count == 0){
            $(".car").hide();
            $(".chepter").hide();
            $(".car_total").hide();
            $(".menu2_1_bm").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(0)").css({"background":"#05141f", "color":"white"});
        }
        if(niro_count == 1){
            $(".chepter").hide();
            $(".chepter1").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        }
        if(niro_count == 2){
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        }
        if(niro_count == 3){
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        }
        niro_count--;
        if(niro_count < 0) {
                niro_count = 0;
        }
        top_func();
    });
    $(".niro_next").on("click",function() {   
        if(niro_count == 0) {
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        };
        if(niro_count == 1) {
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        };
        if(niro_count == 2) {
            $(".chepter").hide();
            $(".chepter4").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        if(niro_count == 3) {
            $(".chepter").hide();
            $(".chepter5").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        niro_count++;
        if(niro_count > 2) {
            niro_count = 3;
        }
        top_func();
    });



    // 쏘렌토 하이브리드 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_2> li:eq(0)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_sorento").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".sor_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
    });
    // 모바일) 쏘렌토 하이브리드 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_m> li:eq(3)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_sorento").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".sor_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        top_func();
    });

    // 쏘렌토 하이브리드 - 상세차종 선택 - 모델, 상세차종 선택  
    $(".sorento_btn1_1").on("click",function() {
        $(".sorento_btn1_2").css({"background":"white", "color":"#05141f"});
        $(".sorento_btn1_1").css({"background":"#05141f", "color":"white"});
    });
    $(".sorento_btn1_2").on("click",function() {
        $(".sorento_btn1_1").css({"background":"white", "color":"#05141f"});
        $(".sorento_btn1_2").css({"background":"#05141f", "color":"white"});
    });

    $(".sorento_btn> li").on("click",function() {
        no=$(this).index()+1;
        $(".sorento_btn2").css({"background":"white", "color":"#05141f"});
        $(".sorento_btn2_"+no).css({"background":"#05141f", "color":"white"});
        $(".sorento_total").hide();
        $(".sorento_total"+no).show();

        if(no==1)
            price = "37,260,000원";
        else if(no==2)
            price = "40,110,000원";
        else if(no==3)
            price = "43,110,000원";
        else if(no==4)
            price = "44,010,000원";
        final = price;
        $(".final").html(price);
    });

    // 쏘렌토 하이브리드 - 컬러 선택 
    $(".sorento_color_btn li").on("click",function() {
        no=$(this).index();
        $(".sorento_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".sorento_color li").hide();
        $(".sorento_color li:eq("+no+")").show();
    });
    // 모바일) 쏘렌토 하이브리드 - 컬러 선택
    $(".chepter2_m> .sorento_color_btn> li").on("click",function() {
        no=$(this).index();
        $(".chepter2_m> .sorento_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".chepter2_m> .sorento_color li").hide();
        $(".chepter2_m> .sorento_color li:eq("+no+")").show();
    });

    // 쏘렌토 하이브리드 - 구매 방법
    $(".money_btn7 li").on("click",function() {
        no=$(this).index();
        $(".money_btn7 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn7 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".halbu_btn3").on("click",function() {
        $(".halbu3, .halbu_list3").show();
    });
    $(".money_btn7 li:eq(0)").on("click",function() {
        $(".halbu3, .halbu_list3").hide();
    });
    $(".halbu_list3 li").on("click",function() {
        no=$(this).index();
        $(".halbu_list3 li").css({"background":"none", "color":"#05141f"});
        $(".halbu_list3 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".money_btn8 li").on("click",function() {
        no=$(this).index();
        $(".money_btn8 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn8 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });

    // 쏘렌토 하이브리드 - 하단 - 이전 다음 버튼 클릭시 해당 화면으로 이동
    let sorento_count =0;
    $(".sorento_prev").on("click",function() {
        if(sorento_count == 0){
            $(".car").hide();
            $(".chepter").hide();
            $(".car_total").hide();
            $(".menu2_1_bm").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(0)").css({"background":"#05141f", "color":"white"});
        }
        if(sorento_count == 1){
            $(".chepter").hide();
            $(".chepter1").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        }
        if(sorento_count == 2){
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        }
        if(sorento_count == 3){
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        }
        sorento_count--;
        if(sorento_count < 0) {
            sorento_count = 0;
        }
        top_func();
    });
    $(".sorento_next").on("click",function() {   
        if(sorento_count == 0) {
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        };
        if(sorento_count == 1) {
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        };
        if(sorento_count == 2) {
            $(".chepter").hide();
            $(".chepter4").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        if(sorento_count == 3) {
            $(".chepter").hide();
            $(".chepter5").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        sorento_count++;
        if(sorento_count > 2) {
            sorento_count = 3;
        }
        top_func();
    });



    // 셀토스 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_2> li:eq(1)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_seltos").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".sel_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
    });
    // 모바일) 셀토스 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_m> li:eq(4)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_seltos").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".sel_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        top_func();
    });

    // 셀토스 - 상세차종 선택 - 모델, 상세차종 선택  
    $(".seltos_btn1_1").on("click",function() {
        $(".seltos_btn1_2").css({"background":"white", "color":"#05141f"});
        $(".seltos_btn1_1").css({"background":"#05141f", "color":"white"});
    });
    $(".seltos_btn1_2").on("click",function() {
        $(".seltos_btn1_1").css({"background":"white", "color":"#05141f"});
        $(".seltos_btn1_2").css({"background":"#05141f", "color":"white"});
    });

    $(".seltos_btn> li").on("click",function() {
        no=$(this).index()+1;
        $(".seltos_btn2").css({"background":"white", "color":"#05141f"});
        $(".seltos_btn2_"+no).css({"background":"#05141f", "color":"white"});
        $(".seltos_total").hide();
        $(".seltos_total"+no).show();

        if(no==1)
            price = "19,800,000원";
        else if(no==2)
            price = "23,000,000원";
        else if(no==3)
            price = "25,150,000원";
        else if(no==4)
            price = "25,900,000원";
        final = price;
        $(".final").html(price);
    });

    // 셀토스 - 컬러 선택 
    $(".seltos_color_btn li").on("click",function() {
        no=$(this).index();
        $(".seltos_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".seltos_color li").hide();
        $(".seltos_color li:eq("+no+")").show();
    });
    // 모바일) 셀토스 - 컬러 선택
    $(".chepter2_m> .seltos_color_btn> li").on("click",function() {
        no=$(this).index();
        $(".chepter2_m> .seltos_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".chepter2_m> .seltos_color li").hide();
        $(".chepter2_m> .seltos_color li:eq("+no+")").show();
    });

    // 셀토스 - 구매 방법
    $(".money_btn9 li").on("click",function() {
        no=$(this).index();
        $(".money_btn9 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn9 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".halbu_btn4").on("click",function() {
        $(".halbu4, .halbu_list4").show();
    });
    $(".money_btn9 li:eq(0)").on("click",function() {
        $(".halbu4, .halbu_list4").hide();
    });
    $(".halbu_list4 li").on("click",function() {
        no=$(this).index();
        $(".halbu_list4 li").css({"background":"none", "color":"#05141f"});
        $(".halbu_list4 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".money_btn10 li").on("click",function() {
        no=$(this).index();
        $(".money_btn10 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn10 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });

    // 셀토스 - 하단 - 이전 다음 버튼 클릭시 해당 화면으로 이동
    let seltos_count =0;
    $(".seltos_prev").on("click",function() {
        if(seltos_count == 0){
            $(".car").hide();
            $(".chepter").hide();
            $(".car_total").hide();
            $(".menu2_1_bm").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(0)").css({"background":"#05141f", "color":"white"});
        }
        if(seltos_count == 1){
            $(".chepter").hide();
            $(".chepter1").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        }
        if(seltos_count == 2){
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        }
        if(seltos_count == 3){
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        }
        seltos_count--;
        if(seltos_count < 0) {
            seltos_count = 0;
        }
        top_func();
    });
    $(".seltos_next").on("click",function() {   
        if(seltos_count == 0) {
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        };
        if(seltos_count == 1) {
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        };
        if(seltos_count == 2) {
            $(".chepter").hide();
            $(".chepter4").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        if(seltos_count == 3) {
            $(".chepter").hide();
            $(".chepter5").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        seltos_count++;
        if(seltos_count > 2) {
            seltos_count = 3;
        }
        top_func();
    });



    // 모하비 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_2> li:eq(2)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_mohave").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".mo_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
    });
    // 모바일) 모하비 - 차종선택 - 차 이미지 클릭시 해당 상세차종 선택 화면으로 이동
    $(".menu2_1_bm1_m> li:eq(5)").on("click",function() {
        $(".menu2_1_bm").hide();
        $(".car_mohave").show();
        $(".chepter1").show();
        $(".car_total").show();
        $(".car_control").hide();
        $(".mo_total").show();
        $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
        $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        top_func();
    });

    // 모하비 - 상세차종 선택 - 모델, 상세차종 선택
    $(".mohave_btn> li").on("click",function() {
        no=$(this).index()+1;
        $(".mohave_btn2").css({"background":"white", "color":"#05141f"});
        $(".mohave_btn2_"+no).css({"background":"#05141f", "color":"white"});
        $(".mohave_total").hide();
        $(".mohave_total"+no).show();

        if(no==1)
            price = "49,600,000원";
        else if(no==2)
            price = "53,850,000원";
        else if(no==3)
            price = "58,000,000원";
        final = price;
        $(".final").html(price);
    });

    // 모하비 - 컬러 선택 
    $(".mohave_color_btn li").on("click",function() {
        no=$(this).index();
        $(".mohave_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".mohave_color li").hide();
        $(".mohave_color li:eq("+no+")").show();
    });
    // 모바일) 셀토스 - 컬러 선택
    $(".chepter2_m> .mohave_color_btn> li").on("click",function() {
        no=$(this).index();
        $(".chepter2_m> .mohave_color_btn li").css("border","1px solid #ccc");
        $(this).css("border","3px solid red");
        $(".chepter2_m> .mohave_color li").hide();
        $(".chepter2_m> .mohave_color li:eq("+no+")").show();
    });

    // 모하비 - 구매 방법
    $(".money_btn11 li").on("click",function() {
        no=$(this).index();
        $(".money_btn11 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn11 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".halbu_btn5").on("click",function() {
        $(".halbu5, .halbu_list5").show();
    });
    $(".money_btn11 li:eq(0)").on("click",function() {
        $(".halbu5, .halbu_list5").hide();
    });
    $(".halbu_list5 li").on("click",function() {
        no=$(this).index();
        $(".halbu_list5 li").css({"background":"none", "color":"#05141f"});
        $(".halbu_list5 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });
    $(".money_btn12 li").on("click",function() {
        no=$(this).index();
        $(".money_btn12 li").css({"background":"none", "color":"#05141f"});
        $(".money_btn12 li:eq("+no+")").css({"background":"#05141f", "color":"white"});
    });

    // 모하비 - 하단 - 이전 다음 버튼 클릭시 해당 화면으로 이동
    let mohave_count =0;
    $(".mohave_prev").on("click",function() {
        if(mohave_count == 0){
            $(".car").hide();
            $(".chepter").hide();
            $(".car_total").hide();
            $(".menu2_1_bm").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(0)").css({"background":"#05141f", "color":"white"});
        }
        if(mohave_count == 1){
            $(".chepter").hide();
            $(".chepter1").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(1)").css({"background":"#05141f", "color":"white"});
        }
        if(mohave_count == 2){
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        }
        if(mohave_count == 3){
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        }
        mohave_count--;
        if(mohave_count < 0) {
            mohave_count = 0;
        }
        top_func();
    });
    $(".mohave_next").on("click",function() {   
        if(mohave_count == 0) {
            $(".chepter").hide();
            $(".chepter2").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(2)").css({"background":"#05141f", "color":"white"});
        };
        if(mohave_count == 1) {
            $(".chepter").hide();
            $(".chepter3").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(3)").css({"background":"#05141f", "color":"white"});
        };
        if(mohave_count == 2) {
            $(".chepter").hide();
            $(".chepter4").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        if(mohave_count == 3) {
            $(".chepter").hide();
            $(".chepter5").show();
            $(".menu2_1_bigBTN> li").css({"background":"none", "color":"#05141f"});
            $(".menu2_1_bigBTN> li:eq(4)").css({"background":"#05141f", "color":"white"});
        };
        mohave_count++;
        if(mohave_count > 2) {
            mohave_count = 3;
        }
        top_func();
    });


    // 영업망 안내=================================================================
    // 상세보기 / 위치보기 클릭시 해당 화면 슬라이드 노출
    var cur = 10;
    var isOn = 0;
    $(".menu2_3_bm> ul> .sub").hide();
    $(".menu2_3_bm> ul> .search> .search_btn1").click(function(){
        var i = $(this).parent().parent().index();
        if(isOn == 1){
            cur = 10;
        }
        if(cur != i){
            $(".menu2_3_bm> ul> .sub").hide();
            $(this).parent().parent().find(".sub_1").slideDown();
            isOn = 2;
        } else {
            $(this).parent().parent().find(".sub_1").slideUp();
            isOn = 1;
        }
        cur = i;
    });
    $(".menu2_3_bm> ul> .search> .search_btn2").click(function(){
        var i = $(this).parent().parent().index();
        if(isOn == 1){
            cur = 10;
        }
        if(cur != i){
            $(".menu2_3_bm> ul> .sub").hide();
            $(this).parent().parent().find(".sub_2").slideDown();
            isOn = 2;
        } else {
            $(this).parent().parent().find(".sub_2").slideUp();
            isOn = 1;
        }
        cur = i;
    });


    // 상세보기 - 영업점 소개 / 영업직 사원 클릭시 해당 화면 노출
    $(".sub_btn1").on("click",function() {
        no = $(this).index()+1;
        $(".sub_text1").hide();
        $(".sub_text1_"+no).show();
        $(".sub_btn1").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });

    $(".sub_btn2").on("click",function() {
        no = $(this).index()+1;
        $(".sub_text2").hide();
        $(".sub_text2_"+no).show();
        $(".sub_btn2").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });

    $(".sub_btn3").on("click",function() {
        no = $(this).index()+1;
        $(".sub_text3").hide();
        $(".sub_text3_"+no).show();
        $(".sub_btn3").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });

    $(".sub_btn4").on("click",function() {
        no = $(this).index()+1;
        $(".sub_text4").hide();
        $(".sub_text4_"+no).show();
        $(".sub_btn4").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });

    $(".sub_btn5").on("click",function() {
        no = $(this).index()+1;
        $(".sub_text5").hide();
        $(".sub_text5_"+no).show();
        $(".sub_btn5").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });

    $(".sub_btn6").on("click",function() {
        no = $(this).index()+1;
        $(".sub_text6").hide();
        $(".sub_text6_"+no).show();
        $(".sub_btn6").css({"background":"white", "color":"black"});
        $(this).css({"background":"#05141f", "color":"white"});
    });

    
});
































