// ★★★★ 체험센터 메뉴에 해당되는 화면 js ★★★★

// Header, footer 연결
$(function() {
    $(".header2").load("header2.html");
    $(".footer").load("footer.html");
});

let price, store, radi;
let str="", date;
const dateA = {
    week:["일","월","화","수","목","금","토"],
    time:["10:00","14:00","16:00"]
}

// // 시승 예약 - 시승 일정 
window.onload = function() {
    // 캘린더
    for(i=0; i<7; i++) {
        str += "<li class='week"+i+"'>"+dateA.week[i]+"</li>";
    }
    $(".week").html(str);
    for(i=0; i<dateA.time.length; i++) {
        $(".time1 p:eq("+i+")").html(dateA.time[i]);
        $(".time2 p:eq("+i+")").html(dateA.time[i]);
        $(".time3 p:eq("+i+")").html(dateA.time[i]);
        $(".time4 p:eq("+i+")").html(dateA.time[i]);
        $(".time5 p:eq("+i+")").html(dateA.time[i]);
        $(".time6 p:eq("+i+")").html(dateA.time[i]);
        $(".time7 p:eq("+i+")").html(dateA.time[i]);
    }
};


$(function() {
    // 국내 사업장 안내 - 지도 메뉴 클릭시 해당 지도이미지 노출
    $(".img_btn li").on("click",function() {
        no = $(this).index()+1;
        $(".img_map li").hide();
        $(".img_map"+no).show();
        $(".p1").css({"background":"#898989"});
        $(".p1_"+no).css({"background":"#05141f"});
    });

    // 국내 사업장 안내 - 지도 메뉴 클릭시 해당하는 정보 하단에 노출
    $(".img_btn li").on("click",function() {
        no = $(this).index();
        $(".at").hide();
        $(".at"+no).show();
    });
    $(".img_btn li:eq(0)").on("click",function() {
        $(".at").show();
    });

    // Top버튼 클릭시 화면 상단으로 이동
    $(".top").on("click",function() {
        $("html, body").stop().animate({"scrollTop":0},500);
    });



    // 시승 예약 - 시승 모델 이미지 선택시 텍스트 노출
    $(".at01_car").on("click",function() {
        no = $(this).index()+1;
        if(no==1)
            price = "모닝";
        else if(no==2)
            price = "K5";
        else if(no==3)
            price = "니로";
        else if(no==4)
            price = "쏘렌토 하이브리드";
        else if(no==5)
            price = "셀토스";
        else if(no==6)
            price = "모하비";
        final = price;
        $(".at01_text").html(price);
    });

    // 시승 예약 - 시승 센터
    $(".at02_ifr> ul> li").hide();
    $(".at02_bm_map> ul> li").hide();

    $(".at02_ifr_1 div").on("click",function(){
        no = $(this).index();
        $(".at02_bm_map0 li").hide();
        $(".at02_bm_map1 li:eq("+no+")").show();

        no = $(this).index()+1;
        if(no==1)
            store = "남대문 지점";
        else if(no==2)
            store = "마포 지점";
        final = store;
        $(".at02_text").html(store);
    });
    $(".at02_ifr_2 div").on("click",function(){
        no = $(this).index();
        $(".at02_bm_map0 li").hide();
        $(".at02_bm_map2 li:eq("+no+")").show();

        no = $(this).index()+1;
        if(no==1)
            store = "연합 대리점";
        else if(no==2)
            store = "양록 대리점";
        final = store;
        $(".at02_text").html(store);
    });
    $(".at02_ifr_3 div").on("click",function(){
        no = $(this).index();
        $(".at02_bm_map0 li").hide();
        $(".at02_bm_map3 li:eq("+no+")").show();

        no = $(this).index()+1;
        if(no==1)
            store = "남수원 지점";
        else if(no==2)
            store = "성남 지점";
        else if(no==3)
            store = "동탄 지점";
        final = store;
        $(".at02_text").html(store);
    });
    $(".at02_ifr_4 div").on("click",function(){
        $(".at02_bm_map0 li").hide();
        $(".at02_bm_map4 li").show();

        no = $(this).index()+1;
        if(no==1)
            store = "무학 대리점";
        final = store;
        $(".at02_text").html(store);
    });
    $(".at02_ifr_5 div").on("click",function(){
        $(".at02_bm_map0 li").hide();
        $(".at02_bm_map5 li").show();

        no = $(this).index()+1;
        if(no==1)
            store = "천안남부 지점";
        final = store;
        $(".at02_text").html(store);
    });

    // 시승 예약 - 시승 방법
    $(".at03_bm div").on("click",function(){
        no = $(this).index()+1;
        if(no==1)
            radi = "동승시승";
        else if(no==2)
            radi = "셀프시승";
        final = radi;
        $(".at03_text").html(radi);
    });

    // 시승 예약 - 시승 일정
    $(".day li").on("click",function(){
        no = $(this).index()+1;
        if(no==1)
            date = "2021.08.15(일)";
        else if(no==2)
            date = "2021.08.16(월)";
        else if(no==3)
            date = "2021.08.17(화)";
        else if(no==4)
            date = "2021.08.18(수)";
        else if(no==5)
            date = "2021.08.19(목)";
        else if(no==6)
            date = "2021.08.20(금)";
        else if(no==7)
            date = "2021.08.21(토)";
        final = date;
        $(".at04_text1").html(date);
    });
    $(".time p").on("click",function(){
        no = $(this).index();
        $(".time p").css({"background":"#f2f2f2","color":"black"});
        $(this).css({"background":"#f0bc05"});

        no = $(this).index()+1;
        if(no==1)
            date = "10:00";
        else if(no==2)
            date = "14:00";
        else if(no==3)
            date = "16:00";
        final = date;
        $(".at04_text2").html(date);
    });

    // 모바일) 시승 예약 - 시승 일정
    $(".at04_ifr> ul> li").on("click",function() {
        no = $(this).index();
        $(".at04_ifr> ul> li").css({"background":"#f2f2f2","color":"black"});
        $(this).css({"background":"#f0bc05"});

        if(no==0)
            date = "10:00";
        else if(no==1)
            date = "14:00";
        else if(no==2)
            date = "16:00";
        final = date;
        $(".at04_text2").html(date);
    });

    // 시승 예약 - 예약 완료
    $(".finish_btn").on("click",function(){
        $(".finish").show();
    });
});


// 시승 예약 - 시승 센터 select> option 클릭시 해당하는 시도 노출
function at02_che(js) {
    sel = js.options[js.selectedIndex].value;
    $(".at02_ifr> ul> li").hide();
    $(".at02_ifr> ul> li").eq(sel).show();
};

// 시승 예약 - 시승 일정 select> option 클릭시 상단에 해당 날짜 노출
function at04_che(js) {
    no = js.options[js.selectedIndex].value;
    if(no==0)
        date = "2021.08.15(일)";
    else if(no==1)
        date = "2021.08.16(월)";
    else if(no==2)
        date = "2021.08.17(화)";
    else if(no==3)
        date = "2021.08.18(수)";
    else if(no==4)
        date = "2021.08.19(목)";
    else if(no==5)
        date = "2021.08.20(금)";
    else if(no==6)
        date = "2021.08.21(토)";
    final = date;
    $(".at04_text1").html(date);
};