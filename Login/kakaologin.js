// 발급 받은 앱 키
Kakao.init("JavaScript 키"); 


function kakaoLogin(){
    Kakao.Auth.login({
        
        // 동의항목에서 설정한 ID와 반드시 일치해야 함
        // scope: "profile_nickname, account_email",
        scope: "profile_nickname,account_email",
        success: function () {
            // 로그인 성공
            Kakao.API.request({
                // 사용자 정보를 가져오기 위한 API
                url: "/v2/user/me",
                success: (res) => {
                    // 사용자 정보를 가져오는데 성공
                    const kakaoAccount = res.kakao_account; // 사용자 계정 정보
                    console.log(kakaoAccount);

                    // 로그인 버튼 숨기기
                    document.getElementById("custom-login-btn").style.display = "none";

                    // 로그아웃 버튼 보이기
                    document.getElementById("logout-btn").style.display = "";
                },
            });
        },

        fail: function (error){
            // 로그인 실패
            console.log(error);
        },

    });
}
function kakaoLogout() {
    if(!Kakao.Auth.getAccessToken()){
        // 로그인을 했으면 Access Token 이 발급되어 있음.
        // 없으면 아직 로그인하지 않은 것임.
        console.log("Not logged in");
        return;
    }

    Kakao.Auth.logout((res) => {
        // 로그아웃 함수 호출
        console.log(window.Kakao.Auth.getAccessToken());
        console.log(res);

        // 로그인 버튼 보이기
        document.getElementById("custom-login-btn").style.display = "";

        // 로그아웃 버튼 숨기기
        document.getElementById("logout-btn").style.display = "none";
    });
}