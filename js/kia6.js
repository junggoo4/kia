// ★★★★ 로그인, 회원가입 화면 js ★★★★

$(function() {
    console.log("dd");
    $('#terms3').click(function(){
		var checked = $('#terms3').is(':checked');
        if(checked) {
            $("input:checkbox").prop("checked", true);
        } else {
            $("input:checkbox").prop("checked", false);
        }
    });
});
