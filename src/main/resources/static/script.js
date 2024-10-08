// 스크롤 버튼 처리
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 버튼 표시 및 숨기기
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// 버튼 클릭 시 맨 위로 스크롤
scrollTopBtn.onclick = function () {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
};
